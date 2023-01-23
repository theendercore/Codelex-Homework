import { addTitle, addText, addURL, addBtn, box } from "./assets/ts/const";
import { reload } from "./assets/ts/helper-func";
import { post } from "./assets/ts/restAPI";

addBtn.addEventListener("click", () => {
  if (addTitle.value === "" || addText.value === "" || addURL.value === "") {
    alert(`Please input all values!`);
  } else {
    post({
      skin: addURL.value,
      title: addTitle.value,
      text: addText.value,
    }).then((res) => {
      reload();
      alert("Added successfully!");
      addURL.value = "";
      addTitle.value = "";
      addText.value = "";
    });
  }
});

reload();