

function Engine(cylinders, size) {
    this.cylinders = cylinders;
    this.size = size;
}

function Car(make, model, color, cylinders, size) {
    this.make = make;
    this.model = model;
    this.color = color;

    this.engine = new Engine(cylinders, size)
}

let jackCar = new Car('Eagle', 'Talon Tsi', 'solver', 4, 2.2);

let jilCar = new Car('Nissan', '300ZX', 'blaxk', 4, 2.2);

console.log(jackCar);

console.log(jilCar)

jackCar.year = 2015;

console.log(jackCar)

// function ab() { console.log("inside") }

// console.log(typeof (ab))

// var square = function ab(x) {
//     x++;
//     return x * x;
// }

// console.log(ab(5))
// console.log(square(12))

// console.log(square(6));
// var square = function ab(x) { return x * x }

// ab(12)

// function ab() {
//     return x * x
// }

// var make Noise = function () {
//     console.log("Ploing")
// }

// make Noise()

// function() {
//     console.log("inside")
// }
// function()

// var f = function (x) {
//     console.log("inside function" + x)
// }

// f(12)

// console.log(x)

// var x = function (a, b) {
//     var result = 1;
//     for (var count = 0; count < b; count++)
//         result *= a;
//     return result;

// }
// console.log(x(2, 10))

// var carMarks = ;
// console.log('Old array:' + carMarks.join());
// carMarks.splice(2, 1, 'ALPHA-ROMEO');
// console.log('New array :' + carMarks.join())

// var a1;
// var a2 = new Array(3); 0 in a1; 0 in a2;

var a = 3;
a.slice(0, 3)

console.log(a)


