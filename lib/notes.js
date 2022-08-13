const fs = require("fs");
const path = require("path");

function newNote(body, userArray) {
  console.log("_______", body);
  console.log("++++++++", JSON.stringify(body));
  console.log(typeof userArray);
  const updatedArray = userArray.push(body);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(updatedArray, null, 2)
  );

  return body;
}

function findNote(id, userArray) {
  const result = userArray.filter((body) => body.id === id)[0];
  console.log("RESULT", result);
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
      JSON.stringify(userArray2, null, 2)
    );
    return userArray2;
  } else {
    return false;
  }
}

module.exports = { newNote, findNote, deleteNote };
