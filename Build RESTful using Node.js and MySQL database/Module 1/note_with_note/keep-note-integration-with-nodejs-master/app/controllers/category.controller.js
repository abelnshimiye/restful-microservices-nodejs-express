const categoryService = require("../service/category.service.js");

/* Call the create method of categoryService object and return the result back*/
const create = (categoryDetails, done) => {
    // validate request
    categoryService.create(categoryDetails, done)

}

/* Call the getAll method of categoryService object and return the result back */
const findAll = (done) => {
    categoryService.getAll(done)
}

/* Call the findById method of categoryService object and return the result back */
const findOne = (categoryId, done) => {
    categoryService.findById(categoryId, done)
}

/* Call the updateById method of categoryService object and return the result back */
const update = (categoryId, done) => {
    categoryService.updateById(categoryId, done)
}

/* Call the remove method of categoryService object and return the result back */
const deleteById = (categoryId, done) => {
    categoryService.remove(categoryId, done)
}

/* Call the removeAll method of categoryService object and return the result back */
const deleteAll = (done) => {
    categoryService.removeAll(done)
}

module.exports = {
    create, findAll, findOne, update, deleteById, deleteAll
}