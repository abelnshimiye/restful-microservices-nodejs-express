const chai = require('chai');
const expect = chai.expect;
const { addition, subtraction } = require('../src/calculatorApp');

describe('Addition Functionality', () => {

  it('Check for addition of two positive numbers and return the sum as positive number', () => {
    // Write Test Case Here
    expect(addition(1, 2)).to.equal(3)
  });

  it('Check for addition of two negative numbers and return the sum as negative number.', () => {
    // Write Test Case Here
    expect(addition(-1, -2)).to.equal(-3)
  });

  it('Check if either of number is negative produce subtracted output.', () => {
    // Write Test Case Here
    expect(addition(1, -2)).to.equal(-1)
    expect(addition(-1, 2)).to.equal(1)
  });


});

describe('Subtraction Functionality', () => {
  it('Check for subtracting two positive number and return positive subtraction', () => {
    // Write Test Case Here
    expect(subtraction(1, 2)).to.equal(-1)
    expect(subtraction(2, 1)).to.equal(1)
  });
  it('Check if either of number is negative produce sum as output', () => {
    // Write Test Case Here
    expect(subtraction(2, -1)).to.equal(3)
  });
  it('Subtracting zero will produce zero as subtraction.', () => {
    // Write Test Case Here
    expect(subtraction(2, 0)).to.equal(0)
  });
});
