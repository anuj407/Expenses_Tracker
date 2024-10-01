
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


// Aggregation query to project only the date field in YYYY-MM-DD format
User.aggregate([
  { $unwind: "$expenses" }, // Unwind the expenses array
  {
    $project: {
      _id: 0, // Exclude the _id field
      name: 1, // Include the name field for reference
      "expenses.date": { $dateToString: { format: "%Y-%m-%d", date: "$expenses.date" } } // Format date to YYYY-MM-DD
    }
  }
])
  .then(results => {
    console.log("Formatted Dates:", results);
  })
  .catch(err => {
    console.error("Error:", err);
  });
