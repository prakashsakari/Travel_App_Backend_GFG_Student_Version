const express = require('express');
const router = express.Router();

const categoryHandler = require("../controllers/categoryController");

router.route("/")
    .get(categoryHandler)

module.exports =  router;