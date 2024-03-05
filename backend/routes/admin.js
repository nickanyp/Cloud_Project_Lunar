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

router.get('/admin/concert', async function(req, res, next){
    try {
        const [row] = await pool.query(
            `select *
             from concert `
        )
        return res.json(row)
    } catch (err){
        console.log(err)
        res.json(err)
    }
})

router.get('/admin/ticket/:conId', async function(req, res, next){
    try {
        const [row] = await pool.query(
            `select * from ticket t join users u on(t.ticket_user_id = u.user_id)
            join booking b on(t.ticket_booking_id = b.booking_id)
            where t.ticket_concert_id = ?`, [req.params.conId]
        )
        
        console.log(req.params.conId)
        console.log(row)
        return res.json(row)
    } catch (err){
        console.log(err)
        res.json(err)
    }
})

router.get('/admin/order/:conId', async function(req, res, next){
    try {
        const [row] = await pool.query(
            `select * from orders o join products p on(o.product_id = p.product_id)
            join users u on(o.user_id = u.user_id)
            where p.product_concert_id = ?`, [req.params.conId]
        )
        console.log(req.params.conId)
        console.log(row)
        return res.json(row)
    } catch (err){
        console.log(err)
        res.json(err)
    }
})

router.get('/admin/artist/:conId', async function(req, res, next){
    try{
        const [row] = await pool.query(
          `select * from concert_artist_record
          where concert_id = ?`,
          [req.params.conId])

        const artId = row[0].artist_id
        const recId = row[0].record_id
        
        const [row2] = await pool.query(
          `select * from artist a join record r on(r.record_id = ?) where a.artist_id = ?`,
          [recId, artId]
        )

    
        return res.json({
          artist: row2
        })
       }catch (err){
        console.log(err)
        res.json(err)
       }
})

router.get('/admin/product/:conId', async function(req, res, next){
    try{
        const [row] = await pool.query(
          `select * from products
          where product_concert_id = ?`,
          [req.params.conId])

    
        return res.json(row)
       }catch (err){
        console.log(err)
        res.json(err)
       }
})

exports.router = router;