const express = require("express")
const path = require("path")
const pool = require("../config")
const multer = require('multer')

router = express.Router()

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


//กด add ticket เข้าตระกร้า
router.post('/addCon/:conId', upload.single(), async function(req, res, next){
    try {
        let result = await pool.query(
            `insert into booking(booking_time, booking_total_price, booking_concert_id, booking_amount, booking_zone) values (CURRENT_TIMESTAMP, ?, ?, ?, ?);`,
            [req.body.total, req.params.conId, req.body.amount, req.body.zone]
        )
        console.log(result)
        return res.json(result)
        
    }catch (err){
        console.log(err)
    }
})

//submit buy ticket

router.get('/ticket/:bookId', async function(req, res, next){
    try {
        const [rows] = await pool.query(
          `SELECT * 
          from booking b
          join concert c
          on (b.booking_concert_id = c.concert_id)
          join images i
          on (c.concert_id = i.image_concert_id)
          where i.image_artist_id is null and i.image_product_id is null and b.booking_id = ?`,
          [req.params.bookId]
        );
        console.log(rows)
        return res.json(rows)
    }catch (err){
        next(err)
    }
})

router.post('/user',upload.single(), async function(req, res, next){
    try{
        const result = await pool.query(
            "insert into users(user_first_name, user_last_name, user_email, user_phone_number) VALUES(?, ?, ?, ?)",
            [req.body.f_name, req.body.l_name, req.body.e_mail, req.body.phone]
        );
        return res.json(result)
    }catch (err){
        console.log(err)
    }
})

router.post('/buyTicket/:bookId/:userId', async function(req, res, next){
    try{
        const [rows] = await pool.query(
            `select * from booking where booking_id = ?`, [req.params.bookId]
        )
        
        const seat = rows[0].booking_id + rows[0].booking_zone + rows[0].booking_concert_id + '_' + rows[0].booking_amount
        const conId = rows[0].booking_concert_id
        
        await pool.query(
            `insert into ticket(ticket_seat_number, ticket_booking_id, ticket_concert_id, ticket_user_id) values (?,?,?,?)`,
            [seat, req.params.bookId, conId, req.params.userId]
        )

        console.log('success')
        return res.json(rows)
    }catch (err){
        res.json(err)
        console.log(err)
    }
})

// buy pro duct

router.get('/order/:proId', async function(req, res, next){
    try {
        const [rows] = await pool.query(
          `SELECT * 
          from products p
          join concert c
          on (p.product_concert_id = c.concert_id)
          join images i
          on (p.product_id = i.image_product_id)
          where i.image_artist_id is null and p.product_id = ?`
        , [req.params.proId]);
        console.log(rows)
        return res.json(rows)
    }catch (err){
        next(err)
    }
})

router.post('/order/:proId/:userId', upload.single(),async function(req, res, next){
    try{
        const [rows] = await pool.query(
            `insert into orders(user_id,  product_id, user_address) values (?, ?, ?)`,
            [req.params.userId, req.params.proId, req.body.address]
        )

        console.log('succes')
        return res.json(rows)
    }catch (err){
        console.log(err)
        res.json(err)
    }
})
exports.router = router;
