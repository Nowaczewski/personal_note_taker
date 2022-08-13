const router = require("express").Router();
const uuid = require("uuid");
const { newNote, findNote, deleteNote } = require("../../lib/notes");
const userArray = require("../../db/db.json");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

router.get("/notes", (req, res) => {
  console.log("<<<userarray>>>>", userArray);
  if (!userArray) {
    res.sendStatus(404);
    return;
  }
  res.json(userArray);
});

router.get("/notes/:id", (req, res) => {
  const postId = findNote(req.params.id, userArray);
  if (!postId) {
    res.sendStatus(404);
    return;
  }
  res.json(postId);
});

router.post("/notes", (req, res) => {
  req.body.id = uuid.v4();
  const input = newNote(req.body, userArray);
  res.json(input);
});

router.delete("/notes/:id", (req, res) => {
  const result = deleteNote(req.params.id, userArray);
  if (!result) {
    res.sendStatus(404);
    return;
  }
  res.json(userArray);
});

module.exports = router;
