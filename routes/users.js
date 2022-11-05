const express = require("express");
const router = express.Router();
const { signup, login, info } = require("../controllers/usersCtrl");

router.post("/signup", signup);
router.post("/login", login);
router.get("/info", info);

module.exports = router;