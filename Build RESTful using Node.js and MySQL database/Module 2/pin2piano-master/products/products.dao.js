const { v4: uuidv4 } = require("uuid");

const ProductModel = require('./products.entity');

/* 
  saveProduct should be a function that calls the save() function on Products Model 
  to persist products data in MongoDB Products collection of shoppingcartDB
*/
const saveProduct = function (productReq, done) {
  let newProductObj = new ProductModel({
    ProductId: uuidv4(),
    ProductName: productReq.ProductName,
    Description: productReq.Description,
    Price: productReq.Price,
    UnitsAvailable: productReq.UnitsAvailable,
    Tags: productReq.Tags,
    Category: productReq.Category,
    Metadata: productReq.Metadata,
    UpdatedOn: productReq.UpdatedOn,
    UpdatedBy: productReq.UpdatedBy
  });

  newProductObj.save((err, savedProduct) => {
    if (err) {
      console.log("Error in saving project, Error: ", err);
      return done("Failed to save project due to data error ...!")
    }
    return done(null, savedProduct)
  })




}

/* 
  getProductById should be a function that calls the findOne() function on Products Model 
  to fetch the Product document by provided Id from the Products collection of shoppingcartDB
*/
const getProductById = function (productId, done) {
  ProductModel.findOne({ ProductId: productId }, (err, product) => {
    if (err) {
      console.log("Error in fetching product by id, Error:", err);
      return done("Failed to fetch product by id");
    }
    if (!product) {
      return done("No product found with the given id");
    }
    return done(null, product);
  });
};

/* 
  findProductsByQuery should be a function that calls the find() function on Products Model 
  with query specifying criteria on category and productName fields
  The function should fetch all documents that matches the criteria from Products 
  collection of shoppingcartDB
*/
const findProductsByQuery = function (productQuery, done) {
  const query = {};

  // Only include criteria if they are provided in productQuery
  if (productQuery.Category && productQuery.Category !== "") {
    query["Category"] = productQuery.Category;
  }

  if (productQuery.ProductName && productQuery.ProductName !== "") {
    query["ProductName"] = { $regex: productQuery.ProductName, $options: 'i' }; // Case-insensitive search
  }

  ProductModel.find(query)
    .select({ _id: 0, __v: 0 })  // Exclude internal MongoDB fields
    .exec((err, results) => {
      if (err) {
        console.log("Error in fetching products, Error:", err);
        return done("Failed to find products due to data errors ...!");
      }
      return done(null, results);
    });
};

/* 
  updateProductDetails should be a function that calls the findOneAndUpdate() 
  function on Products Model that fetches product by id from Products collection of shoppingcartDB and updates it
*/
const updateProductDetails = function (productId, updateReq, done) {
  ProductModel.findOneAndUpdate(
    { ProductId: productId },
    { $set: updateReq },  // Use $set to update specific fields
    { new: true },  // Return the updated document
    (err, updatedProduct) => {
      if (err) {
        console.log("Error in updating product details, Error:", err);
        return done("Failed to update product due to data errors...!");
      }
      if (!updatedProduct) {
        return done("No matching product found to update.");
      }
      return done(null, updatedProduct);
    }
  );
};


module.exports = {
  saveProduct,
  getProductById,
  findProductsByQuery,
  updateProductDetails
}