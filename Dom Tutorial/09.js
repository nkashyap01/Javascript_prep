const ul=document.querySelector(".todo-list");
const li=document.createElement("li");
const referenceNode=document.querySelector(".first-todo"); //class name of first li list
li.textContent="new todo";
ul.insertBefore(li,referenceNode);