const name = "max";
const password = "1111";
const email = "art@gmail.com";

const obj = {
  na: "344",
  body: { name, password, email },
};

const str = JSON.stringify(obj.body);

console.log(obj);
console.log(str);
console.log(JSON.parse(str));
