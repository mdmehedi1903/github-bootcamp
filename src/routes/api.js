const demoController = require("../controllers/demo");
const express = require('express');
const router = express();


router.get('/demo/:name', demoController.demo);

module.exports = router;

