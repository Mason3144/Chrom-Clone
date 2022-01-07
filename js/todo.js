const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-input");
const toDoList = document.querySelector("#todo-list");


const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // toDoList.removeChild(event.target.parentElement);
    const li = event.target.parentElement.parentElement;
    li.remove();


    // function filters(toDo) {
    //     const listId = parseInt(li.id);
    //     return toDo.id !== listId;
    // }
    // const sample = toDos.filter(filters)
    // toDos = sample;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function checkBox(event) {
    const checking = event.target;
    if (checking.classList.value === "") {
        checking.classList.add("checked");
        checking.parentElement.children[1].style.textDecorationLine = "line-through";

    } else {
        checking.classList.remove("checked");
        checking.parentElement.children[1].style.textDecorationLine = "none";
    }
}


function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    const i = document.createElement("i");
    const h4 = document.createElement("h4");
    
    span.innerText = newTodo.text;
    i.classList.add("far","fa-times-circle");
    i.addEventListener("click", deleteToDo);
    h4.addEventListener("click", checkBox)
    li.appendChild(h4);
    li.appendChild(span);
    li.appendChild(btn);
    btn.appendChild(i);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id:Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);       
}
    



