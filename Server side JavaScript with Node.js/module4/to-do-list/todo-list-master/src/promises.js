const todolist = require('./todolist')

//Define a function that gets all the todos from the 
let todoListArray = todolist.todolist
// todolist array declared asynchronously after 2 seconds
getAllTodos = (todoList) => {
    return new Promise((resolve, reject) => {


        if (todoList.length > 0) resolve(todoList)



    })

}
// Define a function to add a todo to the todolist array
createTodo = (todo) => {
    return new Promise((resolve, reject) => {
        if (!todo) {
            reject('No data to be added')
        }
        todolist.push(todo)
        resolve(todolist)
    })
}
module.exports = {
    createTodo, getAllTodos
}