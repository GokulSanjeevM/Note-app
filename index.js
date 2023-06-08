const btnElement = document.getElementById("btn");
const appElement = document.getElementById("app");

function createNoteElement(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty NOte";
  element.value = content;

  element.addEventListener("rightclick", () => {
    const warning = confirm("Do you want delete it?");
    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });

  return element;
}

function deleteNote() {}

function updateNote() {}

function addNote() {
  const notes = getNote();
  const noteObj = {
    id: Math.floor(Math.random() * 10000),
    content: "",
  };
  const noteElement = createNoteElement(noteObj.id, noteObj.content);
  appElement.insertBefore(noteElement, btnElement);

  notes.push(noteObj);

  saveNote(notes);
}

function saveNote(note) {
  localStorage.setItem("note-app", JSON.stringify(notes));
}

function getNotes() {
  return JSON.parse(localStorage.getItem("note-app") || "[]");
}
btnElement.addEventListener("click", addNote);
