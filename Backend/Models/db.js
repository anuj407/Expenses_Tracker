const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGODB_URI
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('MongoDB Connected...');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    })