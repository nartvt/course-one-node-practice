const fs = require('fs');
const chalk = require('chalk');

const addNote = note => {
  const notes = loadNotes();
  notes.push(note);
  saveNotes(notes);
}
// exports.addNote = note => {
//   const notes = loadNotes();
//   notes.push(note);
//   saveNotes(notes);
// }
const editNote = (note) => {
  const data = loadNotes();
  const index = data.findIndex(item => item.id === note.id);
  if (index != -1) {
    data[index].title = note.title;
    data[index].body = note.body;
    saveNotes(data);
    console.log(chalk.green.inverse("Edit SUCCESS, id=" + note.id));
  } else {
    console.log(chalk.red.inverse("Id NOT FOUND"));
  }
}
const listNode = () => {
  const data = loadNotes();
  data.map(item => {
    console.log('--id:' + item.id);
    console.log('--title:' + item.title);
    console.log('--body:' + item.body);
    console.log('---------------');
  })
}
const loadNotes = () => {
  //get and return old data from note.json
  try {
    const data = fs.readFileSync('note.json');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}
const saveNotes = (notes) => {
  fs.writeFileSync('note.json', JSON.stringify(notes));
}
const removeNote = (id) => {
  const data = loadNotes();
  const index = data.findIndex(item => item.id === id);
  if (index != -1) {
    data.splice(index, 1);
    console.log(chalk.green.inverse("Remove SUCCESS"));
  } else {
    console.log(chalk.red.inverse("Id NOT FOUND"));
  }
  saveNotes(data);
}

module.exports = {
  addNote,
  removeNote,
  editNote,
  listNode
}