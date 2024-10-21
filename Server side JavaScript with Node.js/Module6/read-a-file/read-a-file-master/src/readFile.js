const fs = require("fs");
// import the lodash library
const lodash = require("lodash");

// Read the file data and return the data in the resolved Promise
const read = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, { encoding: 'utf-8' }, (err, data) => {
      if (err) reject(err)

      if (data) resolve(data.split(','))
    })
  });
};
// Define a function to Convert the file content to upper case and return the result in the resolved Promise
const convertToUpperCase = (fileContents) => {
  return new Promise((resolve, reject) => {
    if (!fileContents || fileContents.length < 0) reject('File contents does not exist')
    if (fileContents) {
      const upperCase = fileContents.map((data) => data.toUpperCase())

      resolve(upperCase)
    }
  });
};
// Define a function to read and convert the file contents, use the then and catch blocks here
const readAndConvertFileContents = async (fileName, cb) => {
  try {
    const content = await read(fileName)
    const upperCase = await convertToUpperCase(content)
    cb(null, upperCase)


  } catch {
    cb('Encountered error while reading file contents..!')
  }
};

module.exports = {
  readAndConvertFileContents,
};
