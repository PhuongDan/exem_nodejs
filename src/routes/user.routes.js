const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");

router.get("/",controller.list);
router.get("/create",controller.formCreate);
router.post("/create",controller.store);

module.exports = router;