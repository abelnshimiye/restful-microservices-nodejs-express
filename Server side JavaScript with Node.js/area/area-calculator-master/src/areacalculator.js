const pi = 3.14;

const calculateArea = (choice, side, length, breadth, radius) => {
    let area = 0.0;
    switch (choice) {
        case 'square':
            if (side !== null && side > 0) {
                area = side * 4;
            } else {
                return -1; // Invalid input for square
            }
            break;
        case 'rectangle':
            if (length !== null && length > 0 && breadth !== null && breadth > 0) {
                area = length * breadth;
            } else {
                return -1; // Invalid input for rectangle
            }
            break;
        case 'circle':
            if (radius !== null && radius > 0) {
                area = pi * radius * radius;
            } else {
                return -1; // Invalid input for circle
            }
            break;
        default:
            return -1; // Invalid choice
    }
    return area
}
module.exports = { calculateArea }
