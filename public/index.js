const buttonElement = document.querySelector("#button-l");
const loginElement = document.querySelector("#login-l");
const passwordElement = document.querySelector("#password-l");

const buttonRElement = document.querySelector("#button-registration");
const loginERlement = document.querySelector("#login-registration");
const passwordRElement = document.querySelector("#password-registration");

buttonElement.addEventListener("click", () => {
  console.log(loginElement.value, passwordElement.value);
});

buttonRElement.addEventListener("click", () => {
  console.log(loginERlement.value, passwordRElement.value);
  
});
