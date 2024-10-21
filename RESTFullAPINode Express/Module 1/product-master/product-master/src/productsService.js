// Import the necessary dependencies
const lodash = require("lodash");
const productsList = require("./products.json").products
const fs = require('fs')

// get all products
const getProducts = () => {
  return JSON.stringify(productsList)
}

// get a product by ID
const getProductsById = (productId, done) => {
  let product = productsList.filter((p) => p.id === productId).pop()
  if (!product) return done("Requested product doesn't exist..!")
  return done(null, JSON.stringify(product))

}

// save a product
const saveProduct = async (newProduct, done) => {
  const productExist = productsList.find((p) => p.id === newProduct.id)
  if (productExist) return done('Product already exists..!', null)

  productsList.push(newProduct)

  await fs.promises.writeFile('./src/products.json', JSON.stringify({ products: productsList }))
  return done(null, JSON.stringify(productsList));
}

// update a product
const updateProduct = async (productId, updateData, done) => {
  // let updatedProductList = null;
  // update the product list
  const product = productsList.find((p) => p.id === productId)

  if (!product) return done("Request product doesn't exist..!", null)

  const updatedProductList = productsList.map((product) => (product.id === productId ? { ...updateData, id: productId } : product))

  await fs.promises.writeFile('./src/products.json', JSON.stringify({ products: updatedProductList }), (err) => {
    console.log(err)
  })
  return done(null, JSON.stringify(updatedProductList));
}

const deleteProduct = async (productId, done) => {

  const productExist = productsList.find((p) => p.id === productId)
  if (!productExist) return done("Requested product doesn't exist..!", null)

  const updatedProductList = productsList.filter((product) => product.id !== productId)
  await fs.promises.writeFile('./src/products.json', JSON.stringify({ products: updatedProductList }), (err) => {
    console.log(err)
  })
  done(null, JSON.stringify(updatedProductList));
}


module.exports = {
  getProducts,
  getProductsById,
  saveProduct,
  updateProduct,
  deleteProduct
}