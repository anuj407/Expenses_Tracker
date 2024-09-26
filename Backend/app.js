const express = require('express')
var app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
var AuthRouter = require('./routes/authRouter')
var ProductRouter = require('./routes/products')
var ExpenseRouter = require('./routes/ExpenseRouter')
var ensureAuthenticated = require('./Middleware/Auth')
require ('dotenv').config();
require('./Models/db')

app.get('/', (req , res)=>{
    res.send('Hello World from Express')
})
app.use(bodyParser.json());
app.use(cors());

app.use('/auth',AuthRouter)
app.use('/products',ProductRouter)
app.use('/expenses',ensureAuthenticated, ExpenseRouter)
app.listen(process.env.PORT);

module.exports = app;