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
const corsOptions = {
  origin: 'https://expenses-tracker-api-xi.vercel.app', // Allow only this origin
  methods: ['GET', 'POST','DELETE'], // Allow specific methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/auth',AuthRouter)
app.use('/expenses',ensureAuthenticated, ExpenseRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)  // log the port where our app is running 
});

module.exports = app;