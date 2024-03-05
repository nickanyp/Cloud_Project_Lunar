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
        return res.json(result)
    }catch (err){
        console.log(err)
    }
})

router.get('/Login',upload.single(), async function(req, res, next){
    try{
        const [rows] = await pool.query(
            `select * from users where email = ? and password = ?`, [req.body.email, req.body.password]
        )

        
        return res.json(result)
    }catch (err){
        console.log(err)
    }
})
exports.router = router;