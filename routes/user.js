const express = require("express");
const router = express.Router();
const { createUser ,updateUser } = require("../controller/user");

router.post("/users", createUser);
// router.get('./')
router.patch("/update/:id",updateUser)

// router.post("/create",studentcreate)

module.exports = router;
