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
// const User = require("./model/schema");

// To bring the JSON data in our console
app.use(express.json());

// for routing things, we will use our authm abh kuch bhi path ka hoga matter woh yeh auth dekhega
app.use(require("./router/auth"));

// const status = "PASS";

// Middleware
const middleware = (req, res, next) => {
  console.log("Say hi to middleware");
  // if (status == "FAIL") next();
  next();
};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
