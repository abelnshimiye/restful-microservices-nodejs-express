caluculateMultiple = (nb1, nb2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nb1 < 0 || nb2 < 0) {
                reject("We do not accept negative number")
            }
            resolve(nb1 * nb2)
        }, 2000)
    })
}

cube = (nb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nb < 0) {
                reject("I do not deal with negative number")
            }
            resolve(nb * nb)
        }, 2000)
    })

}

caluculateCube = async (nb1, nb2) => {
    const product = await caluculateMultiple(nb1, nb2);
    const cubeProduct = await cube(product)
    return cubeProduct
}

caluculateCube(-23, 2).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})