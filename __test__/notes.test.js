const fs = require("fs");
const { newNote, findNote, deleteNote } = require("../lib/notes");
const userArray = [
  {
    title: "test 1",
    text: "test 1",
    id: "1",
  },
  {
    title: "test 2",
    text: "test 2",
    id: "2",
  },
  {
    title: "test 3",
    text: "test 3",
    id: "3",
  },
];

test("make note ", () => {
  const newNotes = newNote(
    {
      title: "test 1",
      text: "test 11",
      id: "1",
    },
    userArray
  );
  expect(newNotes.title).toBe("test 1");
  expect(newNotes.text).toBe("test 11");
  expect(newNotes.id).toBe("1");
});

test("find id", () => {
  const result = findNote("3", userArray);
  expect(result.title).toBe("test 3");
});

test("delete note", () => {
  const newArray = userArray;
  const newArraylength = newArray.length;
  const result = deleteNote("1", newArray);

  expect(result).toEqual(newArraylength - 1);
});
