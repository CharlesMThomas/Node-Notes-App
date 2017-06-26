console.log('Starting notes.js');

const addNote = (title, body) => {
    console.log('Adding note', title, body);
};

const getAll = () => {
    console.log('Getting all notes');
};

const getNote = (title) => {
    console.log('Getting Note', title);
};

const removeNote = (title) => {
    console.log('Removing Note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};