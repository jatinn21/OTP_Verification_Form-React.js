const moongoose = require("mongoose");

const schema = new moongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: Number,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  intro: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: false,
  },
});

// structure variable should be in capital : make it User, single document name that will show a single record
const User = moongoose.Model("user", schema);

// export this module nd use it wherever you want like app.js firstly
module.exports = User;
