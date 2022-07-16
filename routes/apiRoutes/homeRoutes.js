const router = require("express").Router();

router.get("/notes", (req, res) => {
  res.send(__dirname, "../../public/index.html");
});

module.exports = router;
