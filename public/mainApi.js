import Api from "./Api.js";

const mainApi = new Api("http://localhost:4002");

export const signUp = ({ email, password, name }) => {
  console.log('signUp')

  mainApi.post({
    handle: "/signup",
    body: {email, password, name},
  })
};

export const signIn = ({ email, password }) =>
  mainApi.post({
    handle: "/signin",
    body: { email, password },
  });

export const getMe = ({ token }) =>
  mainApi.get({
    handle: "/users/me",
    token,
  });
