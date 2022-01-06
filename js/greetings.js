const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const main = document.querySelector("#main");
const loginScreen = document.querySelector("#login-screen");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


const savedUsername = localStorage.getItem(USERNAME_KEY);



if (savedUsername === null) {
    loginScreen.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}


function onLoginSubmit(event) {    
    event.preventDefault();
    loginScreen.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);

}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}!`;
    main.classList.remove(HIDDEN_CLASSNAME);
    
}
