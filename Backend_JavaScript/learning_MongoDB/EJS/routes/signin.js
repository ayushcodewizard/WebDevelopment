const express = require("express");
const router = express.Router();
router.get("/signin", (req, res) => {
  res.send("This is Ayush :)");
});
module.exports = router;
