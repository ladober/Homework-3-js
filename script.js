let input = document.querySelector("#js-input-todo");
let form = document.querySelector("#form");
let appContainer = document.querySelector("#js-app-inner-container");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let todoValue = input.value;
  let newTodo = document.createElement("div");
  newTodo.classList.add("new-todo");
  newTodo.innerHTML = `
  <div class="inner-app-container">
    <div class="done-btn">
      <button type="button" data-action="done" class="btn-action-done">
        <img src="done.png" alt="done" />
      </button>
      <h1 class="new-todo-h1" id="js-todo-item">${todoValue}</h1>
    </div>

    <div class="new-todo-tools">
      <button type="button" data-action="edit" class="btn-action-edit">
        <img src="edit.png" alt="edit" />
      </button>
      <button
        type="button"
        data-action="delete"
        class="btn-action-delete"
      >
        <img src="del.png" alt="delete" />
      </button>
    </div>
  </div> `;

  appContainer.append(newTodo);

  input.value = "";
});

appContainer.addEventListener("click", taskDel);

function taskDel(event) {
  if (event.target.dataset.action === "delete") {
    let todoDelete = event.target.closest(".new-todo");
    todoDelete.remove();
  }
}

appContainer.addEventListener("click", taskDone);

function taskDone(event) {
  if (event.target.dataset.action === "done") {
    let todoDone = event.target.closest(".new-todo");

    todoDone.classList.add("done");
  }
}

appContainer.addEventListener("click", taskEdit);

function taskEdit(event) {
  if (event.target.dataset.action === "edit") {
    // let todoEdit = event.target.closest(".inner-app-container");
    let editText = document.querySelector("#js-todo-item");
    let editValue = prompt("Please Edit task");

    editText.textContent = editValue;
    // editText.innerHTML = editValue;
  }
}
