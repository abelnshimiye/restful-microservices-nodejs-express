const products = [
    {
        productName: 'Guci Round Buckelt Belt',
        price: 400
    },

    {
        productName: 'Guci Round Buckelt Belt',
        price: 400
    },
    {
        productName: 'Guci Round Buckelt Belt',
        price: 400
    },
    {
        productName: 'Guci Round Buckelt Belt',
        price: 400
    },
    {
        productName: 'Guci Round Buckelt Belt',
        price: 400
    },
    {
        productName: 'Guci Round Buckelt Belt',
        price: 400
    },
    {
        productName: 'Guci Round Buckelt Belt',
        price: 400
    },
    {
        productName: 'Guci Round Buckelt Belt',
        price: 400
    }, {
        productName: 'Guci Round Buckelt Belt',
        price: 400
    },
    {
        productName: 'Guci Round Buckelt Belt',
        price: 400
    },
    {
        productName: 'Guci Round Buckelt Belt',
        price: 400
    },
    {
        productName: 'Guci Round Buckelt Belt',
        price: 400
    },
    {
        productName: 'Guci Round Buckelt Belt',
        price: 400
    },
    {
        productName: 'Guci Round Buckelt Belt',
        price: 400
    },
    {
        productName: 'Guci Round Buckelt Belt',
        price: 400
    },
]


let premiumProducts = products.filter(product => product.price > 300)
    .map(product => {
        return {
            productName: product.productName.toUpperCase(),
            price: product.price
        }
    })
    .reduce((stocks, currentProduct) => {
        let stockItem = stocks.find(product => product.productName === currentProduct.productName)

        if (stockItem)
            ++stockItem.stock;
        else
            stocks.push({
                productName: currentProduct.productName,
                stock: 1
            })
        return stocks;
    }, [])

console.log(premiumProducts)