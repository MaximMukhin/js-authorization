import { signUp, signIn, getMe } from "./mainApi.js";

const buttonElement = document.querySelector("#button-l");
const emailElement = document.querySelector("#email-l");
const passwordElement = document.querySelector("#password-l");

const buttonRElement = document.querySelector("#button-registration");
const emailERlement = document.querySelector("#email-registration");
const passwordRElement = document.querySelector("#password-registration");
const nameRElement = document.querySelector("#name-registration");

buttonRElement.addEventListener("click", () => {
  console.log(
    "registration",
    emailERlement.value,
    passwordRElement.value,
    nameRElement.value
  );

  const body = {
    email: emailERlement.value,
    password: passwordRElement.value,
    name: nameRElement.value,
  };
  signUp(body);
});

buttonElement.addEventListener("click", () => {
  console.log("login", emailElement.value, passwordElement.value);

  const body = {
    email: emailERlement.value,
    password: passwordRElement.value,
  };

  signIn(body).then((res) => {
    console.log(res.token);
    localStorage.setItem("token", res.token);
    const token = { token: res.token };
    getMe(token).then((res) => console.log(res));
  });
});
