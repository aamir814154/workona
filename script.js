const inputBox = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");


addBtn.addEventListener("click", addTodo);


function addTodo() {
const task = inputBox.value.trim();


if (task === "") {
alert("Please enter a task");
return;
}


const li = document.createElement("li");
li.textContent = task;


li.addEventListener("click", function() {
li.classList.toggle("completed");
});


const deleteBtn = document.createElement("button");
deleteBtn.textContent = "X";
deleteBtn.className = "delete-btn";


deleteBtn.addEventListener("click", function() {
li.remove();
});


li.appendChild(deleteBtn);
todoList.appendChild(li);


inputBox.value = "";
}