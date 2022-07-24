const router = require("express").Router();
const uuid = require("uuid");
const { newNote, findNote, deleteNote } = require("../../lib/notes");
const { userArray } = require("../../db/db.json");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

router.get("/notes", (req, res) => {
  if (!userArray) {
    res.sendStatus(404);
  }
  res.json(userArray);
});

router.get("/notes/:id", (req, res) => {
  const postId = findNote(req.params.id, userArray);
  if (!postId) {
    res.sendStatus(404);
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
    res.sendSend(404);
  }
  res.send(userArray);
});

module.exports = router;
