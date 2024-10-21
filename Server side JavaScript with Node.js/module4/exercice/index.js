// setTimeout(() => {
//     console.log('after')
// }, 0)

// console.log('before')

const add = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([6, 7, 8])
        reject('Error in code')
    }, 2000)

})

add.then((result) => {
    console.log("Success ! " + result)
}).catch(() => {
    console.log(error)
})