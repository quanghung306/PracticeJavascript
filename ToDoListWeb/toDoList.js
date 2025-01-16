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
function filterTodoList(status) {
  let filterList = [];
  if (status === "completed") {
    filterList = todoList.filter((todo) => todo.completed);
  } else if (status === "not-completed") {
    filterList = todoList.filter((todo) => !todo.completed);
  } else {
    filterList = todoList;
  }
  renderTodoList(filterList);
  return filterList;
}
//add todoList
function addTodo() {
  const todoName = addInput.value;
  const currentFilter = filterStatus.value;
  if (todoName) {
    todoList.push({ name: todoName, completed: false });
    addInput.value = "";
    filterTodoList(currentFilter);
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
//sort todoList
function sortTodoList() {
  todoList.sort((a, b) => a.name.localeCompare(b.name));
  const currentFilter = filterStatus.value;
  filterTodoList(currentFilter);
}
//filter Status todoList
filterStatus.addEventListener("change", (event) => {
  const selectStatus = event.target.value;
  filterTodoList(selectStatus);
});
//search todoList
searchInput.addEventListener("input", function (e) {
  const search = e.target.value.toLowerCase();
  const currentFilter = filterStatus.value;
  const filteredByStatus = filterTodoList(currentFilter);
  const filteredList = filteredByStatus.filter((todo) =>
    todo.name.toLowerCase().includes(search)
  );
  renderTodoList(filteredList);
});
