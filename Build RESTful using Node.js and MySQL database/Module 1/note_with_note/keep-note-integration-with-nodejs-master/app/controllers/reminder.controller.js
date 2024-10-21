const reminderService = require("../service/reminder.service.js");

/* Call the create method of reminderService object and return the result back*/
exports.create = (createReminder, done) => {
    reminderService.create(createReminder, done)
};

/* Call the getAll method of reminderService object  and return the result back*/
exports.findAll = (done) => {
    reminderService.getAll(done);
};

/* Call the findById method of reminderService object  and return the result back*/
exports.findOne = (reminderId, done) => {
    reminderService.findById(reminderId, done)
};

/* Call the updateById method of reminderService object  and return the result back*/
exports.update = (reminderId, done) => {
    reminderService.updateById(reminderId, done)
};

/* Call the remove method of reminderService object  and return the result back*/
exports.delete = (reminderId, done) => {
    reminderService.remove(reminderId, done)
}

/* Call the removeAll method of reminderService object  and return the result back*/
exports.deleteAll = (done) => {
    reminderService.removeAll(done)
};
