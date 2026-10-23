const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service.js");
const balochi_AB_model = require("./models/balochi_model.js");


const cors = require("cors");


const app = express();
const path = require("path");
app.use(cors());

app.use(express.static(
    path.join(__dirname, "../froentend")
));

app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

// for multiple file uplode
app.post(
  "/save_data",
  upload.fields([{ name: "audio" }, { name: "image1" }, { name: "image2" }]),
  async (req, res) => {
    console.log(req.body);
    console.log("First file:", req.files.image1[0]);
    console.log("Second file:", req.files.image2[0]);
    console.log("audio file:", req.files.audio[0]);

    const audio = await uploadFile(
      req.files.audio[0].buffer,
      req.files.audio[0].originalname,
    );

    const image1 = await uploadFile(
      req.files.image1[0].buffer,
      req.files.image1[0].originalname,
    );

    const image2 = await uploadFile(
      req.files.image2[0].buffer,
      req.files.image2[0].originalname,
    );

    //console.log("image1",image1)
    //console.log("image2",image2)
    const balochi_AB = await balochi_AB_model.create({
      letter: req.body.letter,
      soundurl: audio.url,
      word1: req.body.word1,
      imageurl1: image1.url,
      word2: req.body.word2,
      imageurl2: image2.url,
    });

    return res.status(201).json({
      message: "data saved successfully",
      balochi_AB,
    });
  },
);

app.get("/get_alphabet/:AB", async (req, res) => {
  const AB = req.params.AB;

  const current_AB = await balochi_AB_model.findOne({
    letter: AB,
  });

  res.json(current_AB)

  
  // res.status(200).json({
    //message: "details",
    //current_AB,
  //});


});

module.exports = app;
