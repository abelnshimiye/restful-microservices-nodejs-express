
const chainproducts = [
    ['Gucci Round Bucklet Belt', 300],
    ['Gucci Round Bucklet Belt', 30],
    ['Smiley T-shirt', 50],
    ['Smiley T-shirt', 60],
    ['Smiley Nail T-shirt', 80],
    ['Smiley Nail T-shirt', 480],
    ['Smiley Nail T-shirt', 580],
]

const nonPremumProduct = chainproducts.filter(product => product[1] <= 300)
    .map(prod => [prod[0].toUpperCase(), prod[1]])
    .reduce((stocks, currentProduct) => {
        let stockItem = stocks.find(item => item[0] === currentProduct[0]);
        if (!stockItem)
            stocks.push([chainproducts[0], 1]);
        else
            stockItem = ++stockItem[1]

        return stocks;
    }, [])

console.log(nonPremumProduct);