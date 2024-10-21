-- create a schema called `notesdb`
CREATE SCHEMA notesdb;

CREATE TABLE notesdb.Note (
    note_id INT PRIMARY KEY AUTO_INCREMENT,
    note_title VARCHAR(255) NOT NULL,
    note_content TEXT,
    note_status VARCHAR(50),
    note_creation_date DATE
);


CREATE TABLE notesdb.User (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    user_added_date DATE,
    user_password VARCHAR(255) NOT NULL,
    user_mobile VARCHAR(20)
);

-- Modify the column type for user_added_date
ALTER TABLE notesdb.User MODIFY COLUMN user_added_date DATE;


-- Create the tables for Note, Category, Reminder, User, UserNote, NoteReminder and NoteCategory
CREATE TABLE notesdb.Category (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL,
    category_descr TEXT,
    category_creation_date DATE,
    category_creator INT
);


-- Note table fields: note_id, note_title, note_content, note_status, note_creation_date
CREATE TABLE notesdb.Reminder (
    reminder_id INT PRIMARY KEY AUTO_INCREMENT,
    reminder_name VARCHAR(255) NOT NULL,
    reminder_descr TEXT,
    reminder_type VARCHAR(50),
    reminder_creation_date DATE,
    reminder_creator INT
);

  
-- User table fields: user_id, user_name, user_added_date, user_password, user_mobile
CREATE TABLE notesdb.NoteCategory (
    notecategory_id INT PRIMARY KEY AUTO_INCREMENT,
    note_id INT,
    category_id INT,
    FOREIGN KEY (note_id) REFERENCES notesdb.Note(note_id),
    FOREIGN KEY (category_id) REFERENCES notesdb.Category(category_id)
);


-- alter table User modify column user_added_date date
CREATE TABLE notesdb.NoteReminder (
    notereminder_id INT PRIMARY KEY AUTO_INCREMENT,
    note_id INT,
    reminder_id INT,
    FOREIGN KEY (note_id) REFERENCES notesdb.Note(note_id),
    FOREIGN KEY (reminder_id) REFERENCES notesdb.Reminder(reminder_id)
);


-- Category table fields : category_id, category_name, category_descr, category_creation_date, category_creator
CREATE TABLE notesdb.UserNote (
    usernote_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    note_id INT,
    FOREIGN KEY (user_id) REFERENCES notesdb.User(user_id),
    FOREIGN KEY (note_id) REFERENCES notesdb.Note(note_id)
);


-- Reminder table fields : reminder_id, reminder_name, reminder_descr, reminder_type, reminder_creation_date, reminder_creator
INSERT INTO notesdb.Note (note_title, note_content, note_status, note_creation_date)
VALUES ('Meeting Notes', 'Discuss project timelines', 'active', '2024-09-01');


-- NoteCategory table fields : notecategory_id, note_id, category_id
INSERT INTO notesdb.User (user_name, user_added_date, user_password, user_mobile)
VALUES ('John Doe', '2024-09-01', 'password123', '1234567890');


-- NoteReminder table fields : notereminder_id, note_id, reminder_id
INSERT INTO notesdb.Reminder (reminder_name, reminder_descr, reminder_type, reminder_creation_date, reminder_creator)
VALUES ('Project Deadline', 'Submit project by end of the month', 'Deadline', '2024-09-01', 1);


-- Usernote table fields : usernote_id, user_id, note_id
INSERT INTO notesdb.NoteCategory (note_id, category_id)
VALUES (1, 1);


-- Insert the rows into the created tables (Note, Category, Reminder, User, UserNote, NoteReminder and NoteCategory)
INSERT INTO notesdb.UserNote (user_id, note_id)
VALUES (1, 1);


-- Fetch the row from User table based on Id and Password.
SELECT * FROM notesdb.User 
WHERE user_id = 1 AND user_password = 'password123';


-- Fetch all the rows from Note table based on the field note_creation_date.
SELECT * FROM notesdb.Note 
WHERE note_creation_date = '2024-09-01';


-- Fetch all the Categories created after the particular Date.
SELECT * FROM notesdb.Category 
WHERE category_creation_date > '2024-09-01';


-- Fetch all the Note ID from UserNote table for a given User.
SELECT note_id FROM notesdb.UserNote 
WHERE user_id = 1;


-- Write Update query to modify particular Note for the given note id.
UPDATE notesdb.Note 
SET note_title = 'Updated Meeting Notes', note_content = 'Updated project timelines' 
WHERE note_id = 1;


-- Fetch all the Notes from the Note table by a particular User.
SELECT * FROM notesdb.Note 
WHERE note_id IN (
    SELECT note_id FROM notesdb.UserNote WHERE user_id = 1
);


-- Fetch all the Notes from the Note table for a particular Category.
SELECT * FROM notesdb.Note 
WHERE note_id IN (
    SELECT note_id FROM notesdb.NoteCategory WHERE category_id = 1
);


-- Fetch all the reminder details for a given note id.
SELECT * FROM notesdb.Reminder 
WHERE reminder_id IN (
    SELECT reminder_id FROM notesdb.NoteReminder WHERE note_id = 1
);


-- Fetch the reminder details for a given reminder id.
SELECT * FROM notesdb.Reminder 
WHERE reminder_id = 1;


-- Write a query to create a new Note from particular User (Use Note and UserNote tables - insert statement).
INSERT INTO notesdb.Note (note_title, note_content, note_status, note_creation_date)
VALUES ('New Note Title', 'New Note Content', 'active', CURDATE());

INSERT INTO notesdb.UserNote (user_id, note_id)
VALUES (1, LAST_INSERT_ID());


-- Write a query to create a new Note from particular User to particular Category(Use Note and NoteCategory tables - insert statement)
INSERT INTO notesdb.Note (note_title, note_content, note_status, note_creation_date)
VALUES ('New Category Note', 'Content related to a specific category', 'active', CURDATE());

INSERT INTO notesdb.NoteCategory (note_id, category_id)
VALUES (LAST_INSERT_ID(), 1);


-- Write a query to set a reminder for a particular note (Use Reminder and NoteReminder tables - insert statement)
INSERT INTO notesdb.Reminder (reminder_name, reminder_descr, reminder_type, reminder_creation_date, reminder_creator)
VALUES ('New Reminder', 'Reminder description', 'Notification', CURDATE(), 1);

INSERT INTO notesdb.NoteReminder (note_id, reminder_id)
VALUES (1, LAST_INSERT_ID());


-- Write a query to delete particular Note added by a User(Note and UserNote tables - delete statement)
DELETE FROM notesdb.UserNote WHERE user_id = 1 AND note_id = 1;

DELETE FROM notesdb.Note WHERE note_id = 1;


-- Write a query to delete particular Note from particular Category(Note and NoteCategory tables - delete statement)
DELETE FROM notesdb.NoteCategory WHERE note_id = 1 AND category_id = 1;

