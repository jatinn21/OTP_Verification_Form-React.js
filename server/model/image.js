const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  length: Number,
  chunkSize: Number,
  uploadDate: Date,
  filename: String,
  contentType: String,
});

const Image = mongoose.model("photos.files", imageSchema);

module.exports = Image;
