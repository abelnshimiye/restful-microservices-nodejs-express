const reminderDAO = require('../dao/reminder.dao')

/* Create and Save a new Reminder by calling reminderDAO create method.
   Depending on the return value, it should return the results or the error message*/
exports.create = function (done) {
   reminderDAO.create(done)
};

/* Retrieve all reminders by calling reminderDAO getAll method.
 Depending on the return value, it should return the results or the error message*/
exports.getAll = function (done) {
   reminderDAO.getAll(done)
};

/* Find a single Reminder by Id by calling reminderDAO findById method.
Depending on the return value, it should return the results or the error message*/
exports.findById = function (done) {
   reminderDAO.findById(done)
};

/* Update a Reminder identified by the id by calling reminderDAO updateById method.
Depending on the return value, it should return the results or the error message*/
exports.updateById = function (done) {
   reminderDAO.updateById(done)
};

/* Delete a Reminder with the specified id by calling reminderDAO remove method.
Depending on the return value, it should return the results or the error message*/
exports.remove = function (done) {
   reminderDAO.remove(done)
};

/* Delete all Reminders by calling reminderDAO removeAll method.
Depending on the return value, it should return the results or the error message*/
exports.removeAll = function (done) {
   reminderDAO.removeAll(done)
};