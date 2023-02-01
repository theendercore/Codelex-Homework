//@ts-ignore
import $ from "jquery";

const subBtn = $<HTMLButtonElement>(".js-sub-btn");
const form = $<HTMLFormElement>(".js-from");

const fromFields = {
  name: <HTMLInputElement>form[0][0],
  email: <HTMLInputElement>form[0][1],
  password: <HTMLInputElement>form[0][2],
};

export default subBtn;
export { fromFields };
