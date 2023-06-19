const express = require("express");
const router = express.Router();
const db = require("../db/db");

router.get("/", (req, res) => {
  res.send({
    hi: "Hello",
    there: "Some data",
  });
});

router.post("/integrations", async (req, res) => {
  const v = await db("person")
    .insert({
      integration_name: req.body.integration_name,
      configured_actions: req.body.configured_actions,
      available_actions: req.body.available_actions,
    })
    .returning("*");
  res.status(201).send(v);
});

router.post("/movies", async (req, res) => {
  const { name, cast, music, director, lyrics, year, rating } = req.body;
  const ins = await db("movies")
    .insert({
      name,
      cast,
      music,
      director,
      lyrics,
      year,
      rating,
    })
    .returning("*");

  res.status(201).json({
    data: ins,
  });
});

router.get("/movies", async (req, res) => {
  const movies = await db.select().from("movies");
  res.status(201).json({ data: movies });
});

module.exports = router;
