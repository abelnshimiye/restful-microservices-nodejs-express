// const AgeError = require("./AgeErrorValidate")

// const validator = (age) => {
//     try {
//         if (age < 0) {
//             throw new AgeError('Age canot be negative')
//         }

//         if (age >= 0 && age < 18) {
//             throw new AgeError('Age is invalid for voting')
//         }

//         console.log('Age is valid')

//     } catch (err) {
//         console.log(err.message)
//         console.log(err.name)
//         // console.log(err.stack)
//     } finally {
//         console.log("Age is validated")
//     }
// }

// // const ag = process.argv[2]
// validator(12)
// function makeAdder(a) {
//     return function (b) {
//         return a + b;
//     };
// }
// var add5 = makeAdder(5);
// console.log(add5(6));

// let str = 'Selenium WebDriver';
// console.log(str.includes('Web', 10));

// function subtract(x = y, y = 1) {
//     return x - y;
// }
// console.log(subtract(10));

var automationtools = ["protractor", "cypress", "selenium", "cucumber"];
console.log(automationtools.splice(1, 1, "watir", "uft"));

console.log('3' + 4 + 5);
const a = assert.lengthOf(new Map([['a', 1], ['b', 2], ['c', 3]]), 3, 'map has size of 6');
console.log(a)



