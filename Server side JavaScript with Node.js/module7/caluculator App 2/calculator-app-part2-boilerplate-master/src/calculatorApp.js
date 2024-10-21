const multiplication = (num1, num2) => {
  // Write the code here
  if (Math.sign(num1) === -1 && Math.sign(num2)) return Math.abs(num1 * num2)
  if (Math.sign(num1) === -1 || Math.sign(num2) === -1) return -Math.abs(num1 * num2)
  return Math.abs(num1 * num2)

};

// const subtraction = (num1, num2) => {
//   // Write the code here

// };

// const multiplication = (num1, num2) => {
//   // Write the code here
// };

const division = (num1, num2) => {
  // Write the code here
  if (num1 === 0 || num2 === 0) return 'error'
  if (Math.sign(num1) === -1 && Math.sign(num2) === -1) return Math.abs(num1 / num2)
  if (Math.sign(num1) === -1 || Math.sign(num2) === -1) return -Math.abs(num1 / num2)
  return Math.abs(num1 / num2)
};

module.exports = { multiplication, division };
