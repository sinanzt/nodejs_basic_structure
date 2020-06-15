var express = require("express");
var router = express.Router();
var controller = require('../controller/PageController');

router.get('/', controller.index);

router.get('/about', controller.about);

router.get('/contact', controller.contact);

router.use(function(err,req,res,next) {
    res.status(500).send("Error!");
    next();

});

router.use(function(err,req,res,next) {
    console.error(err.stack);
    res.status(404).send("Page Not Found!");
    next();

});

module.exports = router;