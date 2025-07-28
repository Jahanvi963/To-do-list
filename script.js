let todos = JSON.parse(localStorage.getItem("todos")) || [];

function addTodo() {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();
  if (text !== "") {
    todos.push(text);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
    displayTodos();
  }
}
function displayTodos() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${todo}</span>
      <button onclick="editTodo(${index})">Edit</button>
      <button onclick="deleteTodo(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}
displayTodos(); 
function editTodo(index) {
  const newTask = prompt("Edit your task", todos[index]);
  if (newTask) {
    todos[index] = newTask;
    localStorage.setItem("todos", JSON.stringify(todos));
    displayTodos();
  }
}
function deleteTodo(index) {
  todos.splice(index, 1); 
  localStorage.setItem("todos", JSON.stringify(todos));
  displayTodos();
}
