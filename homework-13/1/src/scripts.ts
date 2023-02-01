// @ts-ignore
import $ from "jquery";
import subBtn, { fromFields } from "./assets/ts/const";
import { validateName } from "./assets/ts/help-func";

subBtn.on("click", () => {
  let name = validateName(fromFields.name.value);
  console.log(name);
});
