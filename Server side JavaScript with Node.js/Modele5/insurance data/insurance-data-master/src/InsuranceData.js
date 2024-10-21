//import all the modules require
const fs = require('fs')
const readline = require('node:readline')
//Use try and catch to handle the error where ever required
//return the callback with appropriate data where ever require in all the methods

//More userdefined methods can be written if required to write the logical stuff

//This method will take two parameters first the fileName
//and second a callback 
//read file data line by line using readLine
//create array and push all data inside the array


const readFileContentsLineByLine = (fileName, cb) => {

  let fileContents = [];

  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    output: process.stdout,
    terminal: false,
  });

  rl.on('line', (line) => {
    fileContents.push(line)
  })

  rl.on('close', () => {
    cb(null, fileContents)
  })


}

//This method will take two parameters first the filecontent
//and second the callback 
//use map to filter the data 
//Filter all the records for female candidates given region as southwest.

// const filterFemaleCandidates = (fileContents, cb) => {
//   let filteredData;

//   const rl = readline.createInterface({
//     input: fs.createReadStream(fileName),
//     output: process.stdout,
//     terminal: false,
//   })

//   rl.on('line', (line) => {
//     fileContents.push(line)
//   })

//   rl.on('error', (err) => {
//     cb(err)
//   })
//   rl.on('close', () => {
//     cb(null, fileContents.slice(1))
//   })
// }

// //This method will write filtered data in the output file
// const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {

//   //use writeFile method to write the filteredData

// }


//This method will read the file content using Streams
//create array and push all the data from file to it


const readFileContentsUsingStream = (fileName, cb) => {
  let fileContents = [];

  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    output: process.stdout,
    terminal: false,
  })

  rl.on('line', (line) => {
    fileContents.push(line)
  })

  rl.on('error', (err) => {
    cb(err)
  })

  rl.on('close', () => {
    cb(null, fileContents.slice(1))
  })

}

//This method will filetDatewithNoChildren it will take two parameters
//first the fileContent and second the callback
//use map if required to filter the data

const filterFemaleCandidates = (fileContents, cb) => {
  let filteredData;
  //use lodash.compact() if required 

  filteredData = fileContents.filter((data) => data.search('female') !== -1 && data.search('southwest') !== -1)

  cb(null, filteredData)
}




module.exports = {
  readFileContentsLineByLine,
  filterFemaleCandidates,
  readFileContentsUsingStream,
}
