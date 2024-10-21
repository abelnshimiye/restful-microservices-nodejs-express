const blogsService = require("./blogs.service");

const saveBlog = function (blog, done) {
  // call the method from blogs service to save the blog
  return blogsService.saveBlog(blog, done)
}

const findBlogs = function (done) {
  // call the method from blogs service to fetch all blogs
  return blogsService.findBlogs(done)
}


module.exports = {
  saveBlog,
  findBlogs
}