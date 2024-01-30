let input = document.querySelector("#js-input-todo");
let form = document.querySelector("#form");
let appContainer = document.querySelector("#js-app-inner-container");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let todoValue = input.value;

  let newTodo = document.createElement("div");
  newTodo.classList.add("new-todo");
  newTodo.innerHTML = `<div><h1>${todoValue}</h1></div>
  <img src="delete.png" id="js-delete-todo-item" alt="">`;
  console.log(newTodo);
  appContainer.append(newTodo);
});
