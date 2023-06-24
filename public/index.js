const buttonElement = document.querySelector("#button");
const loginElement = document.querySelector("#login");
const passwordElement = document.querySelector("#password");

buttonElement.addEventListener("click", () =>
  console.log(loginElement.value, passwordElement.value)
);
