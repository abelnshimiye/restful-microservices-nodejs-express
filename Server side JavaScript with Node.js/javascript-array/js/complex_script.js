
// const newproducts = [
//     ['Gucci Round Bucklet Belt', 300],
//     ['Gucci Round Bucklet Belt', 30],
//     ['Smiley T-shirt', 50],
//     ['Smiley T-shirt', 60],
//     ['Smiley Nail T-shirt', 80],
//     ['Smiley T-shirt', 480],
//     [' T-shirt', 380],
// ]


// const premiumProducts = newproducts.filter(product => product[1] > 300)

// console.log(premiumProducts)

// const filterdProducts = newproducts.filter(product => product[1] <= 300)

// const newP = filterdProducts.map(product => [product[0], product[1] - product[1] * 15 / 100])

// console.log(newP)

// let productStock = newproducts.reduce((stocts, newproduct) => {
//     let stockItem = stocts.find(stock => stock[0] == newproduct[0]);

//     if (!stockItem)
//         stocts.push([newproduct[0], 1])
//     else
//         ++stockItem[1]

//     return stocts;
// }, [])

// console.log(productStock)