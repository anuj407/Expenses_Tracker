const { text } = require('body-parser');
var mongoose = require('mongoose');
// var plm = require("passport-local-mongoose")

schema = new mongoose.Schema({
  name:{
     type: String,
     required: true
  },
  email:{
    type: String,
    unique: true,
    required: true
  },
  password:{
     type: String,
     required: true
  },
  expenses:[
    {
      text:{
        type: String,
        required: true
      },
      amount:{
        type: Number,
        required: true
      },
      date:{
        type: Date,
        default: Date.now
      }
    }
  ] 
})
// schema.plugin(plm);
module.exports = mongoose.model('User', schema);