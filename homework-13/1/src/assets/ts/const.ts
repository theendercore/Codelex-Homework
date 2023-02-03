//@ts-ignore
import $ from "jquery";

const registerForm = $<HTMLFormElement>(".js-from");

const fromFields = {
  name: <HTMLInputElement>registerForm[0][0],
  email: <HTMLInputElement>registerForm[0][1],
  password: <HTMLInputElement>registerForm[0][2],
};

export default registerForm;
export { fromFields  };
