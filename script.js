let input = document.querySelector("#js-input-todo");
let form = document.querySelector("#form");
let appContainer = document.querySelector("#js-app-inner-container");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let todoValue = input.value;
  let newTodo = document.createElement("div");
  newTodo.classList.add("new-todo");
  newTodo.innerHTML = `<div class="done-btn">
  <div class="inner-app-container">
    <button type="button" data-action="done" class="btn-action">
      <img src="done.png" alt="done" />
    </button>
    <h1 id="js-todo-item">${todoValue}</h1>
  </div>
  <div class="new-todo-tools">
    <button type="button" data-action="edit" class="btn-action">
      <img src="edit.png" alt="edit" />
    </button>
    <button type="button" data-action="delete" class="btn-action">
      <img src="del.png" alt="delete" />
    </button>
  </div>
</div>
  `;

  appContainer.append(newTodo);
  input.value = "";
});

appContainer.addEventListener("click", taskDel);

function taskDel(event) {
  if (event.target.dataset.action === "delete") {
    let todoDelete = event.target.closest(".done-btn");

    todoDelete.remove();
  }
}

appContainer.addEventListener("click", taskDone);

function taskDone(event) {
  if (event.target.dataset.action === "done") {
    let todoDone = event.target.closest(".done-btn");

    todoDone.classList.add("done");
  }
}
