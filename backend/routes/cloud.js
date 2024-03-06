const express = require("express");
const path = require("path")
const pool = require("../config");

router = express.Router();

router.post('/RegisUser',upload.single(), async function(req, res, next){
    try{
        const result = await pool.query(
            "insert into users(fname, lname, email, password, phone) VALUES(?, ?, ?, ?, ?)",
            [req.body.fname, req.body.lname, req.body.email, req.body.password, req.body.phone]
        );
        console.log('success')
        return res.json(result)
    }catch (err){
        console.log(err)
    }
})

router.get('/Login',upload.single(), async function(req, res, next){
    try{
        const result = await pool.query(
            `select * from users where email = ? and password = ?`, [req.body.email, req.body.password]
        );
        return res.json(result)
    }catch (err){
        console.log(err)
    }
})

router.get('/myDormitory/:userId',upload.single(), async function(req, res, next){
    try{
        const result = await pool.query(
            `select * from dormitory d join user u on(d.id_user = u.id) where d.id_user = ?`, [req.params.userId]
        );
        return res.json(result)
    }catch (err){
        console.log(err)
    }
})

// dormitory ==========================================================================================================================

router.post('/RegisDor/:userId',upload.single(), async function(req, res, next){
    try{
        const result = await pool.query(
            "insert into dormitory(id_user, name, address, province, district, parish, post, phone, room, floor, water, light, due_date) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [req.params.userId, req.body.name, req.body.address, req.body.province, req.body.district, req.body.parish, req.body.post, req.body.phone,
            req.body.room, req.body.floor, req.body.water, req.body.light, req.body.due_date]
        );
        console.log('success')
        return res.json(result)
    }catch (err){
        console.log(err)
    }
})

router.get('/Dormitory/:userId/:dorId',upload.single(), async function(req, res, next){
    try{
        const result = await pool.query(
            `select * from dormitory where id = ? and id_user = ?`, [req.params.dorId, req.params.userId]
        );
        return res.json(result)
    }catch (err){
        console.log(err)
    }
})

router.put('/editDormitory/:userId/:dorId',upload.single(), async function(req, res, next){
    try{
        const result = await pool.query(
            `update dormitory set name=?, address=?, province=?, district=?, parish=?, post=?, phone=?, room=?, floor=?, water=?, light=?, due_date=? 
            where id = ? and id_user = ?`, [req.body.name, req.body.address, req.body.province, req.body.district, req.body.parish, req.body.post, req.body.phone,
                req.body.room, req.body.floor, req.body.water, req.body.light, req.body.due_date, req.params.dorId, req.params.userId]
        );
        console.log('success')
        return res.json(result)
    }catch (err){
        console.log(err)
    }
})

router.delete('/deleteDormitory/:userId/:dorId', async function(req, res, next){
    try{
        const result = await pool.query(
            `delete from dormitory where id = ? and id_user = ?`, [req.params.dorId, req.params.userId]
        );
        console.log('success')
        return res.json(result)
    }catch (err){
        console.log(err)
    }
})

// dormitory ==========================================================================================================================

// renter ==========================================================================================================================

router.post('/addRenter/:userId/:dorId',upload.single(), async function(req, res, next){
    try{
        const result = await pool.query(
            "insert into renter(id_dormitory, name1, name2, phone1, phone2, num_room, type, price, email) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [req.params.dorId, req.body.name1, req.body.name2, req.body.phone1, req.body.phone2, req.body.num_room, req.body.type, req.body.price,
            req.body.email]
        );
        console.log('success')
        return res.json(result)
    }catch (err){
        console.log(err)
    }
})

router.get('/Renter/:userId/:dorId',upload.single(), async function(req, res, next){
    try{
        const result = await pool.query(
            `select * from renter where id_dormitory = ?`, [req.params.dorId]
        );
        return res.json(result)
    }catch (err){
        console.log(err)
    }
})

router.get('/detailRenter/:userId/:dorId/:rentId',upload.single(), async function(req, res, next){
    try{
        const result = await pool.query(
            `select * from renter where id = ? and id_dormitory = ?`, [req.params.rentId, req.params.dorId]
        );
        return res.json(result)
    }catch (err){
        console.log(err)
    }
})

router.put('/editRenter/:userId/:dorId/:rentId',upload.single(), async function(req, res, next){
    try{
        const result = await pool.query(
            `UPDATE renter SET  num_room=?,  type=?, price=?, email=?, name1=?, phone1=?, name2=?, phone2=? WHERE id = ? and id_dormitory = ?`, 
            [req.body.num_room, req.body.type, req.body.price, req.body.email, req.body.name1, req.body.phone1, req.body.name2,
                req.body.phone2, req.params.rentId, req.params.dorId]
        );
        console.log('success')
        return res.json(result)
    }catch (err){
        console.log(err)
    }
})

router.delete('/deleteRenter/:userId/:dorId/:rentId', async function(req, res, next){
    try{
        const result = await pool.query(
            `delete from renter where id = ? and id_dormitory = ?`, [req.params.rentId, req.params.dorId]
        );
        console.log('success')
        return res.json(result)
    }catch (err){
        console.log(err)
    }
})
// renter ==========================================================================================================================


exports.router = router;