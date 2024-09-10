import { Sample } from "./sample.js";
const data = {
  userId: 123,
  name: "abc",
};
window.Hello = function () {
  console.log("Hello, World!", data);
  Sample();
};
Hello(); //optional to validate the function
