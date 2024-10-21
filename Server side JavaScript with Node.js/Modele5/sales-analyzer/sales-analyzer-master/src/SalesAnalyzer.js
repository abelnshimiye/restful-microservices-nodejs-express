
//import all the require module
const fs = require('fs')
const _ = require('lodash')

//Write try and catch and handle the exceptions where ever require
//return the callback with appropriate values in the methods 

//More userdefined methods can be written if required to write the logical stuff

////This method will read the file content the first parameter is filename and 
//second is a callback
//create array name it as  fileContents
const readFileContents = async (fileName, cb) => {

  try {

    const data = await fs.promises.readFile(fileName, 'utf-8')
    cb(null, data.toString().replace(/\r\n/g, '\n').split('\n').slice(1))

  } catch (err) {
    cb(err, null)
  }


  //push row by row data in the array created

}

// Use Lodash to filter the data this method will take first parameter
//as fileContents and second parameter as a callback
const filterData = (fileContents, cb) => {
  // let filteredData;

  // cb(null, filteredData);
  cb(null, _.filter(fileContents, (data, err) => {
    if (data) return data.payment_method === 'credit'
    else return cb(err, null)
  })
  )
}

//This method will writeFile data to output.txt file
//it is taking parameters are filteredData and a callback
//filteredata will be given by the filterData method
const writeFilteredDataToFile = async (filteredData, cb) => {
  try {
    const data = await fs.promises.writeFile('./resources/output.txt', filteredData)
    cb(null, 'Successfully wrote filtered data to output.txt file..!')
  } catch (err) {
    cb(err, null)
  }

}


module.exports = {
  readFileContents,
  filterData,
  writeFilteredDataToFile
}
