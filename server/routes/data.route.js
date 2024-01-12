const express = require("express");
const { getData } = require("../contoller/data.controller");
const router = express.Router();

router.get("/table/:data", getData);

module.exports = router;
