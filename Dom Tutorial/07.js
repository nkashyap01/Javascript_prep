const newTodoItem=document.createElement("li");
const newTodoItemText=document.createTextNode("Teach students");
const todoList=document.querySelector(".todo-list");
newTodoItem.append(newTodoItemText);
todoList.append(newTodoItem);
console.log(newTodoItem);