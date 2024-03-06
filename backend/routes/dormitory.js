const express = require("express");
const path = require("path");
const pool = require("../config");
const { router } = require("./cloud");

router = express.Router();

// read
router.get('/home', async(req, res) => {
    try {
        const [data] = await pool.query(
            "select * from suggestion_place s join images i on (s.id = i.place_id) join category c on (s.category_id = c.id)"
        )

        return res.json(data)
    }catch(err){
        console.log(err)
    }
})

// create
router.post("/user/create", async (req, res) => {
  const { username, email, password } = req.body;

  const conn = await pool.getConnection();
  await conn.beginTransaction();

  try {
    const [data] = await pool.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );
    await conn.commit();
    res.status(200).send("User created successfully");

  } catch (err) {
    await conn.rollback();
    console.log(err);
    return res.status(500).send("Failed to create user");

  } finally {
    conn.release();
    console.log("Connection released");
  }
});

// delete
router.delete("/unfav/:favId", async (req, res) => {
  const favId = req.params.favId;

  const conn = await pool.getConnection();
  await conn.beginTransaction();

  try {
    const [data] = await pool.query("DELETE FROM fav_place WHERE id = ?", [
      favId,
    ]);
    conn.commit();
    res.status(200).send("success");

  } catch (err) {
    await conn.rollback();
    console.log(err);
    return res.status(404).send("error");

  } finally {
    conn.release();
    console.log("finally");
  }
});
