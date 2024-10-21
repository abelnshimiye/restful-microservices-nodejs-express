const connection = require('./db');
sql = connection();

/* constructor to initialize reminder with reminder_name, reminder_description and
reminder_creation_date as its properties*/

const Reminder = function (reminder) {
  this.reminder_name = reminder.reminder_name;
  this.reminder_descr = reminder.reminder_descr;
  this.reminder_type = reminder.reminder_type;
  this.reminder_creation_date = reminder.reminder_creation_date;
}


/* 
  create should be a function that calls the query function on sql object
  to persist reminder data in MySQL notesdb schema using insert query
*/

Reminder.create = (newReminder, result = () => { }) => {
  sql.query('INSERT INTO reminder SET ?', newReminder, (err, res) => {
    if (err) {
      console.log("error ", err);
      result(err, null);
      return;
    }
    console.log("create reminder: ", { id: res.insertId, ...newReminder })
    result(null, { id: res.insertId, ...newReminder })




  });
};;


/* 
  findById should be a function that calls the query function on sql object 
  to fetch the reminder by the provided Id from the notesdb schema using select query
*/

Reminder.findById = (id, result) => {
  sql.query(`SELECT * FROM reminder WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found reminder: ", res[0]);
      result(null, res[0]);
      return;
    }

    //  not found reminder with the id
    result({ kind: "not_found" }, null);
  });

};


/* 
  getAll should be a function that calls the query function on sql object 
  to fetch all the reminders or reminders with specific title from the notesdb 
  schema using select query
*/

Reminder.getAll = (name, result = () => { }) => {
  let query = "SELECT * FROM reminder ";

  console.log(name);
  if (name) {
    query += `WHERE reminder_name LIKE '%${name}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error :", err);
      result(null, err);
      return;
    }

    console.log("Reminder: ", res);
    return result(null, res);


  })
};

/* 
  updateById should be a function that calls query function on sql object 
  to update the reminder for the given id from the notesdb schema using update query
*/

Reminder.updateById = (id, reminder, result) => {
  sql.query(
    "UPDATE reminder SET reminder_name = ?, reminder_descr = ?, reminder_type=?,  reminder_creation_date = ? WHERE id = ?",
    [reminder.reminder_name, reminder.reminder_descr, reminder.reminder_type, reminder.reminder_creation_date, id],
    (err, res) => {
      if (err) {
        console.log("error:", err);
        result(null, err);
        return;
      }

      if (res.affectedRows === 0) {
        // not found reminder with the id
        result({ kind: 'not_found' }, null);
        return;
      }
      console.log("Updated reminder: ", { id: id, ...reminder })
      result(null, { id: id, ...reminder });
    });
};

/* 
  remove should be a function that calls query function on sql object 
  to delete the reminder for the given id from the notesdb schema using delete query
*/
Reminder.remove = (id, result) => {
  sql.query('DELETE FROM reminder WHERE reminder_id = ?', id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows === 0) {
      // not found reminder
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Deleted reminder with id: ", id);
    result(null, res)


  });
};

/* 
  removeAll should be a function that calls query function on sql object 
  to delete all the reminders from the notesdb schema using delete query
*/
Reminder.removeAll = result => {
  sql.query("DELETE FROM reminder", (err, res) => {
    if (err) {
      console.log("error", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} categories`)
    result(null, res);
  })
};

module.exports = Reminder;
