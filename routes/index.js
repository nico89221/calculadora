var express = require('express');
var router = express.Router();

controller = require("../controller/controllerApp");


router.get('/',controller.home); 

module.exports = router;
