var express = require('express');
var ensureAuthenticated=require('../Middleware/Auth')
var router = express.Router();

router.get('/', ensureAuthenticated,(req, res) => {
    res.status(200).json([
        {
            name: 'Mobile',
            price:10000
        },
        {
            name: 'Laptop',
            price: 30000
        }
    ]);
});

module.exports = router;
