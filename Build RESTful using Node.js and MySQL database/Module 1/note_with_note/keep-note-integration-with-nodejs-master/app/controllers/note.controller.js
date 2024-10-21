const noteService = require("../service/note.service.js");

/* Call the create method of noteService object and return the result back*/
exports.create = (createNote, done) => {
    noteService.create(createNote, done)
};

/* Call the getAll method of noteService object and return the result back */
exports.findAll = (done) => {
    noteService.getAll(done)
};

/* Call the findById method of noteService object and return the result back */
exports.findOne = (noteId, done) => {
    noteService.findById(noteId, done)
};

/* Call the updateById method of noteService object and return the result back */
exports.update = (noteId, done) => {
    noteService.updateById(noteId, done)
};

/* Call the remove method of noteService object and return the result back */
exports.delete = (noteId, done) => {
    noteService.remove(noteId, done)
};

/* Call the removeAll method of noteService object and return the result back */
exports.deleteAll = (done) => {
    noteService.removeAll(done)
};
