// All code related to routing will be write here

// As this is a part of express
const express = require("express");
// jese front-end mai react-router hota hai routing karne k liye, like that backend mai express hai

const router = express.Router();

// We want DB and ModelSchema to store data in our mongo
require("../db/connection");
const User = require("../model/schema");

// Same thing that we have done in app.js using app.get

// {
// name: 'jatin',
// email: 'js650555@gmail.com',
// mobileNumber: 1234567899,
// DOB: '2001-11-21',
// address: 'Pune, Maharashtra',
// intro: "I'm Jatin"
// }

// To get the data that user has submitted, we will use 'post' ,no more questions!!!
router.post("/register", async (req, res) => {
  // So to print that object or JSON data in our console
  // before auth file in app.js : app.use(express.json()) :

  //   We will destruct the object:
  const { name, email, mobileNumber, DOB, gender, address, intro, resume } =
    req.body;

  try {
    // Whether there is any mobileNumber already exist?
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res
        .status(422)
        .json({ message: "User Already exist with this Email" });
    }

    // Create an user document of the schema with his data
    const user = new User({
      name,
      email,
      mobileNumber,
      DOB,
      gender,
      address,
      intro,
      resume,
    });

    // Try to Save the Json/ Object to mongo
    const userRegister = await user.save();
    if (userRegister) {
      return res.status(201).json({ message: "User Data Registered : )" });
    } else {
      return res.status(500).json({ message: "Failed to Register  : (" });
    }
  } catch (error) {
    console.log("Already registered");
  }

  //   res.send("mera register page"); // this is done bby using Post so first user should request for this page otherwise there will be a 'Cannot GET / register'
});
module.exports = router;
