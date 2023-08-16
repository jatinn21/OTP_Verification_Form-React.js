const express = require("express")
const multer = require("multer")
const { GridFsStorage } = require("multer-gridfs-storage")
require("dotenv").config()

const url =process.env.DATABASE

/**
 * * When to Use GridFS
 * * In MongoDB, use GridFS for storing files larger than 16 MB.

 * * https://www.npmjs.com/package/multer
 * * Multer is a middleware for handling multipart/form-data, 
 * * which is primarily used for uploading files.  
 * 
 * * One collection stores the file chunks, and the other stores file metadata

 * * so in our case colllection 'photos.chunks' contains file chunks
 * * and photos.files stores file metadata
 * * When you query GridFS for a file, the driver will reassemble the chunks as needed.
 * * ref_link => https://www.mongodb.com/docs/manual/core/gridfs/#:~:text=GridFS%20uses%20two%20collections%20to,reassemble%20the%20chunks%20as%20needed.
 */
// Create a storage object with a given configuration
const storage = new GridFsStorage({
  url,
  file: (req, file) => {
    //If it is an image, save to photos bucket
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      return {
        bucketName: "photos",
        filename: `${Date.now()}_${file.originalname}`,// Generate a unique filename
      }
    } else {
      //Otherwise save to default bucket
      return `${Date.now()}_${file.originalname}`
    }
  },
})

// Set multer storage engine to the newly created object

const upload = multer({ storage })
module.exports = upload;
