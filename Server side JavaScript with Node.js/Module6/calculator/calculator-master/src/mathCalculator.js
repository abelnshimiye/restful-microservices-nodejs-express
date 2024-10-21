// Return the sum of the two numbers
const addNumbers = (number1, number2) => {
  const sum = number1 + number2
  return sum
}
// Return the difference of the two numbers
const subNumbers = (number1, number2) => {
  const difference = number1 - number2
  return difference
}
// Return the product of the two numbers
const mulNumbers = (number1, number2) => {
  const product = number1 * number2
  return product
}
// Return the quotient of the two numbers, check if the second number is zero, then throw an Error
const divNumbers = (number1, number2) => {
  if (number2 === 0) throw new Error('ERROR::Divide by zero error..!')
  const division = number1 / number2
  return division
}
// Return the mod of the two numbers, check if the second number is zero, then throw an Error
const moduloNumbers = (number1, number2) => {
  if (number2 === 0) throw new Error('ERROR::Invalid number..!')

  const mod = number1 % number2
  return mod
}

module.exports = {
  addNumbers, subNumbers, mulNumbers, divNumbers, moduloNumbers
}
