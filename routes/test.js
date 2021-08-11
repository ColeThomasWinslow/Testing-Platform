const router = require("express").Router();
const Test = require("../models/test");
// Get All Tests

router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let tests;
    if (username) {
      tests = await Test.find({ username });
    } else {
      tests = await Test.find();
    }
    res.status(200).json(tests);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
