const express = require("express");
const path = require("path")
const pool = require("../config");

router = express.Router();

router.get("/home", async function (req, res, next) {
    const promise1 = pool.query(
      `SELECT c.concert_id, c.concert_name, i.image_file_path 
      from concert c
      join images i
      on (c.concert_id = i.image_concert_id)
      where i.image_product_id is null and i.image_artist_id is null`
    );
    const promise2 = pool.query(
      `SELECT p.product_id, product_name, i.image_file_path 
      from products p
      join images i
      on (p.product_id = i.image_product_id)`
    );
    const promise3 = pool.query(
      `SELECT a.artist_id, a.artist_name, i.image_file_path  
      from artist a
      join images i
      on (a.artist_id = i.image_artist_id)`
    );

    Promise.all([promise1, promise2, promise3])
      .then((result) => {
        const concert = result[0];
        const product = result[1];
        const artist = result[2]

        res.json({
          concert: concert[0],
          product: product[0],
          artist: artist[0],
        });
      })
      .catch((err) => {
        console.log(err)
        return next(err);
      });
});

//=========================================================================================

router.get("/searchconcert/:search", upload.single(), async function (req, res, next) {
  try {
    const [rows] = await pool.query(
      `SELECT c.concert_id, c.concert_name, i.image_file_path 
      from concert c 
      join images i 
      on (c.concert_id = i.image_concert_id)
      where (i.image_product_id is null and i.image_artist_id is null) and c.concert_name like concat('%', ?, '%')`,
      [req.params.search]
    );
    console.log(req.body.search)
    return res.json(rows)
  }catch (err){
    next(err)
  }
  
});

router.get("/searchartist/:search", upload.single(), async function (req, res, next) {
  try {
    const [rows] = await pool.query(
      `SELECT a.artist_id, a.artist_name, i.image_file_path 
      from artist a 
      join images i 
      on (a.artist_id = i.image_artist_id)
      where a.artist_name like concat('%', ?, '%')`,
      [req.params.search]
    );
    console.log(req.body.search)
    return res.json(rows)
  }catch (err){
    next(err)
  }
  
});

router.get("/searchproduct/:search", upload.single(), async function (req, res, next) {
  try {
    const [rows] = await pool.query(
      `SELECT p.product_id, p.product_name, i.image_file_path 
      from products p 
      join images i 
      on (p.product_id = i.image_product_id)
      where p.product_name like concat('%', ?, '%')`,
      [req.params.search]
    );
    console.log(req.body.search)
    return res.json(rows)
  }catch (err){
    next(err)
  }
  
});



//=========================================================================================

router.get("/concert", async function (req, res, next) {
  try {
    const [rows] = await pool.query(
      `SELECT c.concert_id, c.concert_name, i.image_file_path 
      from concert c 
      join images i 
      on (c.concert_id = i.image_concert_id)
      where i.image_product_id is null and i.image_artist_id is null`
    );
    console.log(rows)
    return res.json(rows)
  }catch (err){
    next(err)
  }
  
});

router.get("/artist", async function (req, res, next) {
  try {
    const [rows] = await pool.query(
      `SELECT a.artist_name, i.image_file_path, artist_id 
      from artist a 
      join images i 
      on (a.artist_id = i.image_artist_id)`
    );
    console.log(rows)
    return res.json(rows)
  }catch (err){
    next(err)
  }
});

router.get("/product", async function (req, res, next) {
  try {
    const [rows] = await pool.query(
      `SELECT p.product_id, p.product_name, p.product_price, i.image_file_path 
      from products p
      join images i 
      on (p.product_id = i.image_product_id)`
    );
    console.log(rows)
    return res.json(rows)
  }catch (err){
    next(err)
  }
  
});

// condetail

router.get("/concert/:conId", async function(req, res, next){
   try{
    const [rows] = await pool.query(
      `select * from concert c join images i 
      on (c.concert_id = i.image_concert_id) 
      where  concert_id=? and (i.image_product_id is null and i.image_artist_id is null)`,
      [req.params.conId]
    )
    const [rows2] = await pool.query(
      `select * from concert_artist_record where concert_id = ?`, [req.params.conId]
    )

    const acar_id = rows2[0].concert_artist_record_id;
    const artist_id = rows2[0].artist_id;
    const record_id = rows2[0].record_id;

    const [row3] = await pool.query(
      `select * from artist where artist_id = ?`, [artist_id]
    )
    const [row4] = await pool.query(
      `select * from record where record_id = ?`, [record_id]
    )

    const [row5] = await pool.query(
      `select * from products p join images i
      on (p.product_id = i.image_product_id)
      where p.product_concert_id = ?`,
      [req.params.conId]
    )

    const [row6] = await pool.query(
      `select venue_name, venue_address, venue_description
      from venue where venue_id = ?`,
      [rows[0].concert_venue_id]
    )

    return res.json({
      concert: rows,
      artist: row3,
      record: row4,
      product: row5,
      venue: row6
    })
   } catch (err) {
    res.json(err) 
  }
})

//product detail
router.get("/product/:proId", async function(req, res, next){
  try{
   const [rows] = await pool.query(
     `select * from products p 
     join images i 
     on (p.product_id = i.image_product_id) 
     where p.product_id=? and (i.image_artist_id is null)`,
     [req.params.proId]
   )

   const [row5] = await pool.query(
     `select * from concert c 
     join products p 
     on (p.product_concert_id = c.concert_id)
     where p.product_id = ?`,
     [req.params.proId]
   )

   return res.json({
     concert: row5,
     product: rows
   })
  } catch (err) {
   res.json(err) 
 }
})

// sep by art

router.get("/concertby/:artId", async function(req,res,next){
   try{
    const [row] = await pool.query(
      `select * from artist a
      join images i on (a.artist_id = i.image_artist_id)
      where artist_id = ?`,
      [req.params.artId])
    
    const [row2] = await pool.query(
      `select * from concert_artist_record where artist_id = ?`,
      [req.params.artId]
    )

    const conId = row2[0].concert_id
    const recId = row2[0].record_id

    const [row3] = await pool.query(
      `select * from concert c
      join images i
      on (c.concert_id = i.image_concert_id)
      where i.image_product_id is null and i.image_artist_id is null and c.concert_id = ?`, [conId]
    )

    const [row4] = await pool.query(
      `select * from record where record_id = ?`, [recId]
    )

    return res.json({
      artist: row,
      concert: row3,
      record: row4
    })
   }catch (err){
    console.log(err)
    res.json(err)
   }
})

exports.router = router;
