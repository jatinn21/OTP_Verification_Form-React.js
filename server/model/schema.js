const moongoose = require("mongoose");

const schema = new moongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  mobileNumber: {
    type: Number,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  DOB: {
    type: Date,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  intro: {
    type: String,
    required: false,
  },
  resume: {
    type: String,
    required: false,
  },
});

// structure variable should be in capital : make it User, single document name that will show a single record
const User = moongoose.model("user", schema);

// export this module nd use it wherever you want like app.js firstly
module.exports = User;
