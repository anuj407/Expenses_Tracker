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
// Middleware to manually set CORS headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://expenses-tracker-frontend-beta.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true'); // If you need credentials
    next();
  });
  
  app.use(cors({
    origin: 'https://expenses-tracker-frontend-beta.vercel.app',
    credentials: true,  // This is needed to allow credentials (cookies, etc.)
  }));
app.use(bodyParser.json());
app.use('/auth',AuthRouter)
app.use('/expenses',ensureAuthenticated, ExpenseRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)  // log the port where our app is running 
});

module.exports = app;