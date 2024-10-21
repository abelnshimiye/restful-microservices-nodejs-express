const addition = (num1, num2) => {
  // Write the code here
  return num1 + num2
}

const subtraction = (num1, num2) => {
  // Write the code here
  if (num1 === 0 || num2 === 0) return 0
  if (Math.sign(num1) === 1 && Math.sign(num2) === 1) {
    return num1 - num2
  } else {
    return -Math.abs(num1 - num2)
  }
}

module.exports = { addition, subtraction };
