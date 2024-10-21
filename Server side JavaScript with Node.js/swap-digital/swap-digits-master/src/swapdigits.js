const swapDigits = (number) => {
    let swappedNumber = 0
    //write logic here
    const numberArray = number.toString().split('')
    let oddOrEven = numberArray.length % 2 === 1 ? 'odd' : 'even'

    if (number === 0) {
        return 0
    } else if (Math.sign(number) === -1) {
        return 0
    } else if (oddOrEven === 'odd') {
        let swappedNumber = swapDigitsArray(numberArray.slice(1), 'odd')
        return +(numberArray[0] + swappedNumber)
    } else if (oddOrEven === 'even') {
        swappedNumber = swapDigitsArray(numberArray, 'even')
        return swappedNumber
    }
}
const swapDigitsArray = (array, type) => {
    for (let i = 0; i < array.length; i += 2) {
        array.splice(i, 2, array[i + 1], array[i])
    }
    if (type === 'even') {
        return +array.join('')
    } else if (type === 'odd') {
        return array.join('')
    }
}
module.exports = swapDigits