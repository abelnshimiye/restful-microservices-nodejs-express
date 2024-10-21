// const assert = require('chai').assert;
// const packageFile = require('../package.json');
// const calculator = require('../calculator');
// const glob = require('glob');
// const fs = require('fs');

// variable declairation
// let sum = 0;
// let sub = 0;
// let mul = 0;
// let div = 0;

const calculator = require('../calculator')
const { expect } = require('chai')

// testsuit
describe('Calculator testing', function () {
  describe('Functionality testing', function () {
    describe('Addition functionality testing', function () {
      // testcase to test is dependencies are used or not
      it('Add two positive numbers, returning get positive sum', function () {
        // Write the testing logic here
        expect(calculator('a', { lhs: 1, rhs: 2 })).to.be.equal(3)
      });
      // test case to test add functionality

      it('Add two negative numbers, returning get negative sum', function () {
        // Write the testing logic here
        expect(calculator('a', { lhs: -1, rhs: -2 })).to.be.equal(-3)
      });

      // test case to test add functionality
      it('Add two number, with either of them is negative, producing subtracted output'
        , function () {

          // Write the testing logic here
          expect(calculator('a', { lhs: -1, rhs: 2 })).to.be.equal(1)
          expect(calculator('a', { lhs: 1, rhs: -2 })).to.be.equal(-1)

        });
      // test case to test add functionality
      it('Add zeros, produces zero', function () {
        expect(calculator('a', { lhs: 0, rhs: 0 })).to.be.equal(0)
        // Write the testing logic here
      });
    });
    describe('Subtraction functionality testing', function () {
      // test case to test subtract functionality
      it('Subtract two positive numbers, returning get positive subtraction',
        function () {
          // Write the testing logic here
          expect(calculator('s', { lhs: 10, rhs: 5 })).to.be.equal(5)

        });

      // test case to test subtract functionality
      it('Subtract two negative numbers, returning get negative subtraction',
        function () {
          // Write the testing logic here
          expect(calculator('s', { lhs: -10, rhs: -5 })).to.be.equal(-5)

        });

      // test case to test subtract functionality
      it('Subtract two number, with either of them is negative, producing sum output'
        , function () {
          // Write the testing logic here

          expect(calculator('s', { lhs: 10, rhs: -5 })).to.be.equal(15)
          expect(calculator('s', { lhs: -10, rhs: 5 })).to.be.equal(-15)

        });

      // test case to test subtract functionality
      it('Subtract zeros, produces zero', function () {
        // Write the testing logic here
        expect(calculator('s', { lhs: 0, rhs: 0 })).to.be.equal(0)

      });
    });
    describe('Multiplication functionality testing', function () {
      // test case to test multiply functionality
      it('Multiply two positive numbers, returning get positive Multiplication', function () {
        // Write the testing logic here
        expect(calculator('m', { lhs: 2, rhs: 2 })).to.be.equal(4)

      });
      // test case to test multiply functionality
      it('Multiply two negative numbers, returning get positive Multiplication', function () {
        // Write the testing logic here
        expect(calculator('m', { lhs: -2, rhs: -2 })).to.be.equal(4)

      });
      // test case to test multiply functionality
      it(`Multiply two number, with either of them is negative,
        producing negative multiplication output`,
        function () {
          // Write the testing logic here
          expect(calculator('m', { lhs: -2, rhs: 2 })).to.be.equal(-4)
          expect(calculator('m', { lhs: 2, rhs: -2 })).to.be.equal(-4)

        });

      // test case to test multiply functionality
      it('Multiply zeros, produces zero', function () {
        // Write the testing logic here
        expect(calculator('m', { lhs: 0, rhs: 0 })).to.be.equal(0)

      });
    });
    describe('Division functionality testing', function () {
      // test case to test divide functionality

      it('Divide two positive numbers, returning get positive Multiplication', function () {
        // Write the testing logic here
        expect(calculator('d', { lhs: 4, rhs: 2 })).to.be.equal(2)

      });


      // test case to test divide functionality
      it('Divide two negative numbers, returning get positive Multiplication', function () {
        // Write the testing logic here
        expect(calculator('d', { lhs: -4, rhs: -2 })).to.be.equal(2)

      });

      // test case to test divide functionality

      it('Divide two number, with either of them is negative, producing negative Division output',
        function () {
          // Write the testing logic here
          expect(calculator('d', { lhs: -4, rhs: 2 })).to.be.equal(-2)
          expect(calculator('d', { lhs: 4, rhs: -2 })).to.be.equal(-2)

        });

      // test case to test divide functionality
      it(`Should not divide by 0, producing 'Can not divide by zero' message`, function () {
        // Write the testing logic here
        expect(calculator('d', { lhs: 0, rhs: 0 })).to.be.equal('Can not divide by zero')

      });
    });
    describe('Unknown operation testing', function () {
      // test case to test divide functionality
      it(`should not calculate if unknown operation is passed,
        producing 'Unknown operation' message`,
        function () {
          // Write the testing logic here
          expect(calculator('g', { lhs: 0, rhs: 0 })).to.be.equal('Unknown operation')

        });
    });
  });
});