
var mongoose = require('mongoose');

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
module.exports = mongoose.model('User', schema);