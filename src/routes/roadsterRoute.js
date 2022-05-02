"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var request = require("../utils/getRequest");
var roadsterInfo;
request.getData(function (data) {
    roadsterInfo = data;
});
router.get("/roadster", function (req, res) {
    console.log(roadsterInfo + "   ================ Here");
    res.render("roadster", {
        roadster: roadsterInfo
    });
});
module.exports = router;
