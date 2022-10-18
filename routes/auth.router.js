const express = require('express');

const singupHandler = require("../controllers/signupController");
const loginHandler = require("../controllers/loginController");

const router = express.Router();

router.route("/register")
    .post(singupHandler)

router.route("/login")
    .post(loginHandler)

module.exports = router;