
//import fs module
const fs = require('fs')
const path = require('path')




//The getProducts function take done as callback
//It will read the product.json file

const getProducts = function (done) {
  //parse the filecontent and save it in another varible say productdata
  //return the callback with first parameter as undefined and second parameter as productdata

  const fileContent = fs.readFileSync(path.join('src', 'products.json'), 'utf8');

  if (!fileContent) {
    return done('No data found', null)

  } else {
    const productData = JSON.parse(fileContent)
    return done(null, productData)
  }

}


//The function getProductById will take two parameters first the id and second the callback
//It will read the product.json file
const getProductById = function (id, done) {
  //write all the logical steps
  //return the callback with first parameter as undefined and second parameter as productDetails

  const fileContent = fs.readFileSync(path.join('src', 'products.json'), 'utf8');

  if (!fileContent) {
    return done('No data found', null)
  } else {
    const productData = JSON.parse(fileContent)
    const product = productData.find((product) => product.id === +id)

    if (!product) {
      return done('No product found', null)

    } else {
      return done(null, product)
    }

  }

}


//The saveProductDetails method will take productDetails and done as callback
//It will read the product.json file
const saveProductDetails = async function (ProductDetails, done) {
  //write all the logical steps
  //parse the filecontent and save it in another varible say productdata
  //push the productDetails in the productData

  //Write the productData into the file 

  //return the callback with undefined and ProductDetails

  const fileContent = fs.readFileSync(path.join('src', 'products.json'), 'utf8');

  if (!fileContent) {
    return done('Products do not exists')
  } else {
    const productData = JSON.parse(fileContent)
    const product = productData.find((data) => data.id === ProductDetails.id)

    if (product) {
      return done('Product already exists')
    } else {
      productData.push(ProductDetails)

      await fs.promises.writeFile(path.join('src', 'products.json'), JSON.stringify(productData), (err) => {
        if (err) {
          return done('Error when writing file')
        }
      })

      return done(null, ProductDetails)
    }

  }




}

//The method deleteProductById will take productId and done as parameters
//It will read the product.json file

const deleteProductById = async function (productId, done) {
  //Write all the logical steps
  //return the callback with first parameter as undefined and second parameter as productDetails

  const fileContents = fs.readFileSync(path.join('src', 'products.json'), 'utf8');

  if (!fileContents) {
    return done("Requested data doesn't exists")
  } else {
    const productData = JSON.parse(fileContents)

    const product = productData.find((product) => product.id === +productId)

    if (!product) {
      return done("Product doesn't exists..!!")
    } else {
      const updatedProductsData = productData.filter((product) => product.id !== +productId)

      await fs.promises.writeFile(path.join('src', 'products.join'), JSON.stringify(updatedProductsData), (err) => {
        if (err) {
          return done('Erro encountered when writing file..!!')
        }
      })

      const updateFile = fs.readFileSync(path.join('src', 'products.json'), 'utf8')

      return done(null, JSON.parse(updateFile))

    }
  }

}


module.exports = {
  getProducts,
  getProductById,
  saveProductDetails,
  deleteProductById

}