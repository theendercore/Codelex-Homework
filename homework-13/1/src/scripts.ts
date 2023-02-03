// @ts-ignore
import $ from "jquery";
import validateName from "./assets/ts/validateName";
import registerForm, { fromFields } from "./assets/ts/const";
import validateEmail from "./assets/ts/validateEmail";
import validatePassword from "./assets/ts/validatePassword";

let z = 0;
registerForm.on("submit", (e) => {
  e.preventDefault();
  z = z + 1;
  console.log("help");

  let invalidFields: string[] = [];
  let name = validateName(fromFields.name.value);
  let email = validateEmail(fromFields.email.value);
  let password = validatePassword(fromFields.password.value);

  if (!name.success) invalidFields.push(" - That the name has at least 2 characters and only contain letters");
  if (!email.success) invalidFields.push(" - That the email is valid");
  if (!password.success)
    invalidFields.push(
      " - Thats the password is at least 8 characters long and contain at least one number and special character [!, @, #, $, %, ^, &, *]"
    );

  if (name.success && email.success && password.success) {
    console.log("send to server: ", name.value, email.value, password.value);
    alert("Success!\nYou have registered.");
  } else {
    alert(`Please make sure :\n${invalidFields.join("\n")}`);
  }
});

console.log(z);
console.log(registerForm);
