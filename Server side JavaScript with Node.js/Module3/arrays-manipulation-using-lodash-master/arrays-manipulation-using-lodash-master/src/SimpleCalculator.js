

//Create function addNumbers which will take two parameters add the numbers 
//and return the result
const addNumbers = (nb1, nb2) => {
  return nb1 + nb2
}


//Create function subNumbers which will take two parameters subtract the numbers 
//and return the result
const subNumbers = (nb1, nb2) => {
  return nb1 - nb2;
}


//Create function mulNumbers which will take two parameters multiply the numbers 
//and return the result
const mulNumbers = (nb1, nb2) => {
  return nb1 * nb2;
}


//Create function divNumbers which will take two parameters divide the numbers 
//and return the result

const divNumbers = (nb1, nb2) => {
  if (nb2 > 0) {
    return nb1 / nb2;
  }
  return 'Please provide valid numbers..!'
}


module.exports = {
  addNumbers,
  subNumbers,
  mulNumbers,
  divNumbers
}