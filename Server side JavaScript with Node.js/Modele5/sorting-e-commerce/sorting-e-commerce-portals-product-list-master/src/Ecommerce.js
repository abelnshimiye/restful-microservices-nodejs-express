const fs = require('fs')

const readline = require('node:readline')
//import all the require modules

//write try catch to hanlde the exceptions

//More userdefined methods can be written if required to write the logical stuff

//return the callback with appropriate data where ever require in all the methods

//This method will read the file it takes two parameters first the fileName 
//and second the callback
const readFileContents = async (fileName, cb) => {
  const fileContent = []
  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    output: process.stdout,
    terminal: false,
  })

  rl.on('error', () => cb('Encountered error while reading file contents..!'))
  rl.on('line', (line) => fileContent.push(line))
  rl.on('close', () => cb(null, fileContent.slice(1)))
}

//This method will sortDataonprice it will take two parameters one is fileContent
//second the callback
const sortDataOnPrice = (fileContents, cb) => {
  //use lodash.sortBy()
  const sortedData = fileContents.sort((a, b) => a.retail_price - b.retail_price)

  cb(null, sortedData);
}

//This method will sortDataonRating 
const sortDataOnRating = (fileContents, cb) => {
  //use map where ever required 

  //use lodash sortBy() and compact() if required
  const sortedData = fileContents
    .filter((a) => !isNaN(+a.product_rating))
    .sort((a, b) => b.product_rating - a.product_rating)

  //use lodash.reverse() if required
  // cb(null, lodash.reverse(sortedData));
  cb(null, sortedData);
}

//This method will write the sortedData in the output file
const writeSortedDataToFile = (outputFileName, fileName) => {

  let fileContentsWithRating = []

  readFileContents(fileName, (err, data) => {
    if (err) {
      console.error(err)
    } else {
      fileContentsWithRating = data
        .map((stringData) => stringData
          .replace(' ', '')
          .split(','))
        .filter((data) => !isNaN(+data[data.length - 1]))

      fileContentsWithRating
        .forEach((data) => data.push('\n'))

      let sortedData = fileContentsWithRating
        .sort((a, b) => b[b.length - 2] - a[a.length - 2])
        .map((data) => data.join(','))
        .toString(',')

      fs.writeFile(outputFileName, sortedData, (err) => {
        if (err) throw err
        console.log('Data written to file')
      })


    }
  })


}




writeSortedDataToFile('./resources/sortedOnRating.txt', './resources/data_flipkart_product_sample.csv')
module.exports = {
  readFileContents,
  sortDataOnPrice,
  sortDataOnRating,

}