const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    // toDoList.removeChild(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
}


function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
    span.innerText = newTodo;
    btn.innerText = "x";
    btn.addEventListener("click", deleteToDo);

}




function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);




