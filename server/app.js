console.log("do it");

const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();

app.use(cors());

// Storage configuration for multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file, req.body);
  res.json({ message: "File uploaded successfully", file: req.file });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server listening to ${port}`);
});
