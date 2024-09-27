const express = require('express')
var app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
var AuthRouter = require('./routes/authRouter')
var ExpenseRouter = require('./routes/ExpenseRouter')
var ensureAuthenticated = require('./Middleware/Auth')
require ('dotenv').config();
require('./Models/db')
const PORT = process.env.PORT || 8080
app.get('/', (req , res)=>{
    res.send('Hello World from Express')
})
const allowedOrigins = [
  'https://expenses-tracker-frontend-beta.vercel.app',
  'https://another-allowed-origin.com' // Add more as needed
];

const corsOptions = {
  origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
          callback(null, true); // Allow the origin
      } else {
          callback(new Error('Not allowed by CORS')); // Deny the origin
      }
  },
  methods: ['GET', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(bodyParser.json());
app.use('/auth',AuthRouter)
app.use('/expenses',ensureAuthenticated, ExpenseRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)  // log the port where our app is running 
});

module.exports = app;