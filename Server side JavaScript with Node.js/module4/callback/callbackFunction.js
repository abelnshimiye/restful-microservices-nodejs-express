const calculateTotalBillAfterDiscount = (billAmount, discountPercentage) => {

    // if (error) {
    //     console.log("There is error in the code !!")
    // }
    // setTimeout(() => {
    // console.log(billAmount - (billAmount * discountPercentage))
    // }, 2000)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (billAmount < 0 || discountPercentage < 0) {
                reject('The errer')

            }
            resolve(billAmount - (billAmount * discountPercentage))

        }, 2000)
    })




}

const validateBillAmount = (billAmount) => {
    if (billAmount <= 0) {
        console.log('Invalid bill amount')
    } else {
        console.log('valid bill amount')
    }
}

var billAmt = process.argv[2]
var discountPercentage = process.argv[3]

// setTimeout(calculateTotalBillAfterDiscount, 2000, undefined, billAmt, discountPercentage)
calculateTotalBillAfterDiscount(billAmt, discountPercentage).then((result) => {
    console.log(`Result ${result}`)
}, (error) => {
    console.log(error)
})
validateBillAmount(billAmt)
