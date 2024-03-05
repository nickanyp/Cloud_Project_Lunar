const express = require("express")
const path = require("path")
const pool = require("../config")
const multer = require('multer')

router = express.Router()

// multer =================================================================================
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './static/uploads') // path to save file
    },
    filename: function (req, file, callback) {
        // set file name
        callback(null, file.originalname)
    }
})
const upload = multer({ storage: storage })
// multer ================================================================================= 

router.post("/addCon", upload.single('img'), async function(req, res, next){
    const file = req.file
    if (!file) {
        const error = new Error("Please upload file");
        // alert("Please upload file");
        error.httpStatusCode = 400;
        return res.json(error)
    }

    const ve_name = req.body.ve_name
    const ve_add = req.body.ve_add
    const ve_des = req.body.ve_des

    const con_name = req.body.con_name
    const con_des = req.body.con_des
    const con_date = req.body.con_date
    const con_time = req.body.con_time
    const con_price = req.body.con_price

    try{
        let result = await pool.query(
            `insert into venue (venue_name, venue_address, venue_description) values (?, ?, ?);`,
            [ve_name, ve_add, ve_des]
        )

        const ve_id = result[0].insertId

        let result2 = await pool.query(
            `insert into concert (concert_name, concert_description, concert_date, concert_time, concert_venue_id, concert_price) values (?,?,?,?,?,?)`,
            [con_name, con_des, con_date, con_time, ve_id, con_price]
        )

        const con_id = result2[0].insertId

        await pool.query(
            `insert into images(image_concert_id, image_file_path) values(?, ?);`,
            [con_id, file.path.substr(6).replaceAll("\\", "/")]
        )

        console.log("success")
    } catch (err) {
        res.json(err)
        console.log(err)
    } finally {
        console.log("finally")
    }
    
})

//=========================================================================================

router.post("/:idCon/addArtist", upload.single('img'), async function (req, res, next) {
    const file = req.file;
    if (!file) {
        const error = new Error("Please upload file");
        // alert("Please upload file");
        error.httpStatusCode = 400;
        return res.json(error)
    }

    const con_id = req.params.idCon
    const name = req.body.name;
    const des = req.body.des;
    const rec_name = req.body.rec_name

    try {
        let result = await pool.query(
            `insert into artist(artist_name, artist_description) values(?, ?);`,
            [name, des]
        )

        const artistId = result[0].insertId;

        let result2 = await pool.query(
            `insert into record(record_name) values(?);`,
            [rec_name]
        )

        const recordId = result2[0].insertId

        await pool.query(
            `insert into images(image_concert_id, image_artist_id, image_file_path) values(?, ?, ?);`,
            [con_id, artistId, file.path.substr(6).replaceAll("\\", "/")]
        )

        await pool.query(
            `insert into concert_artist_record (concert_id, artist_id, record_id) values (?, ?, ?);`,
            [con_id, artistId, recordId]
        )

        console.log(result)
        res.json("success!")
        res.json()
    } catch (err) {
        res.json(err)
        console.log(err)
    } finally {
        console.log('finally')
    }
})

//========================================================================================= 

router.post("/:conId/addProduct", upload.single('img'), async function(req, res, next){
    const file = req.file
    if (!file) {
        const error = new Error("Please upload file");
        // alert("Please upload file");
        error.httpStatusCode = 400;
        return res.json(error)
    }

    const pro_name = req.body.pro_name
    const pro_des = req.body.pro_des
    const con_id = req.params.conId
    const pro_price = req.body.price

    try {
        let result = await pool.query(
            `insert into products(product_name, product_description, product_concert_id, product_price) values (?, ?, ?, ?);`,
            [pro_name, pro_des, con_id, pro_price]
        )

        const proId = result[0].insertId

        await pool.query(
            `insert into images(image_concert_id, image_product_id, image_file_path) values (?, ?, ?);`,
            [con_id, proId, file.path.substr(6).replaceAll("\\", "/")]
        )
    } catch (err) {
        res.json(err)
        console.log(err)
    } finally{
        console.log('finally')
    }
})

exports.router = router;