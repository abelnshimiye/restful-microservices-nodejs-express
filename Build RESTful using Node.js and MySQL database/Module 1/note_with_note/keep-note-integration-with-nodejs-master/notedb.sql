
-- create a schema called `notesdb`

-- Create the tables for Note, Category, Reminder, NoteReminder and NoteCategory

-- Note table fields: note_id, note_title, note_content, note_status, note_creation_date
  
-- Category table fields : category_id, category_name, category_descr, category_creation_date

-- Reminder table fields : reminder_id, reminder_name, reminder_descr, reminder_type, reminder_creation_date

-- NoteCategory table fields : notecategory_id, note_id, category_id

-- NoteReminder table fields : notereminder_id, note_id, reminder_id

-- Execute all the queries in Mysql workbench 


-- Create database
CREATE DATABASE IF NOT EXISTS notesdb;
USE notesdb;

-- Create Note table
CREATE TABLE Note (
    note_id INT AUTO_INCREMENT PRIMARY KEY,
    note_title VARCHAR(255) NOT NULL,
    note_content TEXT,
    note_status ENUM('active', 'archived', 'deleted') DEFAULT 'active',
    note_creation_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create Category table
CREATE TABLE Category (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL,
    category_descr TEXT,
    category_creation_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create Reminder table
CREATE TABLE Reminder (
    reminder_id INT AUTO_INCREMENT PRIMARY KEY,
    reminder_name VARCHAR(255) NOT NULL,
    reminder_descr TEXT,
    reminder_type ENUM('email', 'notification', 'sms') NOT NULL,
    reminder_creation_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create NoteCategory table (many-to-many relationship between Note and Category)
CREATE TABLE NoteCategory (
    notecategory_id INT AUTO_INCREMENT PRIMARY KEY,
    note_id INT,
    category_id INT,
    FOREIGN KEY (note_id) REFERENCES Note(note_id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES Category(category_id) ON DELETE CASCADE
);

-- Create NoteReminder table (many-to-many relationship between Note and Reminder)
CREATE TABLE NoteReminder (
    notereminder_id INT AUTO_INCREMENT PRIMARY KEY,
    note_id INT,
    reminder_id INT,
    FOREIGN KEY (note_id) REFERENCES Note(note_id) ON DELETE CASCADE,
    FOREIGN KEY (reminder_id) REFERENCES Reminder(reminder_id) ON DELETE CASCADE
);

