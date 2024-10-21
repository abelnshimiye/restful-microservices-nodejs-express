
//import the lodash module


//Create a function to find a maximum value from number array.
const findMaxValue = (arry) => {
  return arry.reduce((ac, cr) => (ac > cr ? ac : cr))
}


//Create a function to return all values from numbers array 
//which are greater than the second parameter.​
const filterValues = (array, num) => {
  return array.filter((v) => v > num)
}


//Create a function to return all values of employeeName array in capital letters.

const nameInCapital = (array) => {
  let newArry = array.map((name) => name.toUpperCase())
  return newArry
}



module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,

}
