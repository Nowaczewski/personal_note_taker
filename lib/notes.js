const fs = require("fs");
const path = require("path");

function newNote(body, userArray) {
  console.log("_______", body);
  userArray.push(body);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notes, null, 2)
  );

  return body;
}

function findNote(id, userArray) {
  const result = userArray.filter((input) => input.id == id)[0];
  if (result) {
    return result;
  } else return false;
}

function deleteNote(id, userArray) {
  const postDelete = findNote(id, userArray);
  if (postDelete) {
    const postToDelete = userArray.indexOf(postDelete);
    const userArray2 = userArray;
    userArray2.splice(postToDelete, 1);

    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify({ userArray: userArray2 }, null, 2)
    );
    return userArray2.length;
  } else {
    return false;
  }
}

module.exports = { newNote, findNote, deleteNote };
