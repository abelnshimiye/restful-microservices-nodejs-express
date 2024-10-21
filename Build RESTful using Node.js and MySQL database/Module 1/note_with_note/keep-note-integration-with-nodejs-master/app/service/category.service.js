const categoryDAO = require('../dao/category.dao')

/* Create and Save a new Category by calling categoryDAO create method.
   Depending on the return value, it should return the results or the error message*/
const create = function (categoryDetails, done) {
   categoryDAO.create(categoryDetails, (err, results) => {
      if (err) {
         return done({ "STATUS": "DATA ERROR" })
      }
      return done(null, results)
   });
}

/* Retrieve all categories by calling categoryDAO getAll method.
 Depending on the return value, it should return the results or the error message*/
const getAll = function (categories, done) {
   categoryDAO.getAll(categories, (err, results) => {
      if (err) {
         return done({ "STATUS": "DATA ERROR" })
      }
      return done(null, results)
   });
}

/* Find a single Category by Id by calling categoryDAO findById method.
Depending on the return value, it should return the results or the error message*/
const findById = function (categoryId, done) {
   categoryDAO.findById(categoryId, (err, results) => {
      if (err) {
         return done({ "STATUS": "DATA ERROR" })
      }
      return done(null, results)
   });
}

/* Update a Category identified by the id by calling categoryDAO updateById method.
Depending on the return value, it should return the results or the error message*/
const updateById = function (categoryId, done) {
   categoryDAO.updateById(categoryId, (err, results) => {
      if (err) {
         return done({ "STATUS": "DATA ERROR" })
      }
      return done(null, results)
   });
}

/* Delete a Category with the specified id by calling categoryDAO remove method.
Depending on the return value, it should return the results or the error message*/
const remove = function (categories, done) {
   categoryDAO.remove(categories, (err, results) => {
      if (err) {
         return done({ "STATUS": "DATA ERROR" })
      }
      return done(null, results)
   });
}

/* Delete all Categories by calling categoryDAO removeAll method.
Depending on the return value, it should return the results or the error message*/
const removeAll = function (categories, done) {
   categoryDAO.removeAll(categories, (err, results) => {
      if (err) {
         return done({ "STATUS": "DATA ERROR" })
      }
      return done(null, results)
   });
}


module.exports = {
   create, getAll, findById, updateById, remove, removeAll
}