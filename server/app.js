// mongoDb Compass is for storing data locally so user can't use the data outside
//  monogDb Atlas, user can use the data from the outside

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

// Connecting to my database with Security but don't forgot to add the config.env file in gitignore
dotenv.config({ path: "./config.env" }); // yeh or kahi nhi lagega kyu ki yeh app.js mai hai
const PORT = process.env.PORT;

/*
// To reduce the code from App.js we will make a separate folder named db and add this code in that folder by creating a file name connection.js
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.log("Not Connected");
  });
  */
// To bring the code from Connection.js
require("./db/connection");
// incase you got any error then try this :
/*
moongoose.connect(DB,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true,
  useFindAndModify:false
}).then(()=>{
  console.log('Connected Successfully');
}).catch((error)=>{
  console.log('Error, Failed to Connected!!')
})
*/

// importing our schema details
const User = require("./model/schema");

// const status = "PASS";

// Middleware
const middleware = (req, res, next) => {
  console.log("Say hi to middleware");
  // if (status == "FAIL") next();
  next();
};

app.get("/", (req, res) => {
  res.send("Hello world from the server");
});

app.get("/about", middleware, (req, res) => {
  console.log("Hi from About too");
  res.send("This is About page");
});
app.get("/contact", (req, res) => {
  res.send("This is Contact Page");
  console.log(`request : ${req}`);
  console.log(`resposne : ${res}`);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
