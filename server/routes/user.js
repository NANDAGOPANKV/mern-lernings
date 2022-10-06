// import dependencies
const express = require("express");
const {
  getAllUsers,
  addUsers,
  upDateUserById,
  deleteUser,
  findUserById,
} = require("../controllers/user");

//get all router mudules inside the router variable
const router = express.Router();

// get user data route
router.get("/", getAllUsers);
router.post("/", addUsers);
router.put("/:id", upDateUserById);
router.delete("/:id", deleteUser);
router.get("/:id", findUserById);

// exporting
module.exports = router;
