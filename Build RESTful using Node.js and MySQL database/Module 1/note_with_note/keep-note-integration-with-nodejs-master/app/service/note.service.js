const noteDAO = require('../dao/note.dao')

/* Create and Save a new Note by calling noteDAO create method.
   Depending on the return value, it should return the results or the error message*/
exports.create = function (done) {
   noteDAO.create(done);
};

/* Retrieve all notes by calling noteDAO getAll method.
 Depending on the return value, it should return the results or the error message*/
exports.getAll = function (done) {
   noteDAO.getAll(done);
};

/* Find a single Note by Id by calling noteDAO findById method.
Depending on the return value, it should return the results or the error message*/
exports.findById = function (done) {
   noteDAO.findById(done)
};

/* Update a Note identified by the id by calling noteDAO updateById method.
Depending on the return value, it should return the results or the error message*/
exports.updateById = function (done) {
   noteDAO.updateById(done)
};

/* Delete a Note with the specified id by calling noteDAO remove method.
Depending on the return value, it should return the results or the error message*/
exports.remove = function (done) {
   noteDAO.remove(done)
};

/* Delete all Notes by calling noteDAO removeAll method.
Depending on the return value, it should return the results or the error message*/
exports.removeAll = function (done) {
   noteDAO.removeAll(done)
};