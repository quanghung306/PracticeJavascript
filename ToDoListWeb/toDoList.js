let todoList = [];
const todoListElement = document.getElementById("todoList");
const addInput = document.getElementById("addInput");
const filterStatus = document.getElementById("filterStatus");
const searchInput = document.getElementById("searchInput");
// render todo list
function renderTodoList(list) {
  todoListElement.innerHTML = "";
  list.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.completed ? "completed" : ""}`;
    li.innerHTML = `
        <span>${todo.name}</span>
        <div class="actions">
        <button class="completeBtn" onclick="completeTodo(${index})">
        ${
            todo.completed
            ? ' <i class="fa-regular fa-circle-xmark"></i>'
            : '<i class="fa-solid fa-check"></i>'
        }
        </button>
        <button onclick="deleteTodo(${index})"> <i class="fa-solid fa-trash-can"></i> </button>
        </div>
        `;
    todoListElement.appendChild(li);
  });
}
//add todoList
function addTodo() {
  const todoName = addInput.value;
  if (todoName) {
    todoList.push({ name: todoName, completed: false });
    addInput.value = "";
    renderTodoList(todoList);
  } else {
    alert("Vui lòng nhập tên công việc!");
  }
}
//delete todoList
function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList(todoList);
}
// Check completed todoList
function completeTodo(index) {
  todoList[index].completed = !todoList[index].completed;
  renderTodoList(todoList);
}
//filter Status todoList
function filterTodoList(status) {
  let filerTodo = [];
  if (status === "completed") {
    filerTodo = todoList.filter((todo) => todo.completed);
  } else if (status === "not-completed") {
    filerTodo = todoList.filter((todo) => !todo.completed);
  } else {
    filerTodo = todoList;
  }
  renderTodoList(filerTodo);
}
filterStatus.addEventListener("change", (event) => {
  const selectStatus = event.target.value;
  filterTodoList(selectStatus);
});
//sort todoList
function sortTodoList() {
  todoList.sort((a, b) => a.name.localeCompare(b.name));
  const currentFilter = filterStatus.value;
  filterTodoList(currentFilter);
}
//search todoList
searchInput.addEventListener("input", function (e) {
  const search = e.target.value;
  const filteredList = todoList.filter((todo) => todo.name.includes(search));
  renderTodoList(filteredList);
});
