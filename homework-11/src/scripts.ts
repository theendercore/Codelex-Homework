import {
  ADD,
  DB_URL,
  formBtns,
  submitBtn,
  tableHeaders,
} from "./assets/ts/const";
import { addRow, changePage, rPaginator } from "./assets/ts/constructors";
import { getPage } from "./assets/ts/restAPI";

let page = {
  first: "http://localhost:3004/countries?_limit=20&_page=1",
  previous: "",
  current: "",
  next: "",
  last: "",
};

ADD.addEventListener("click", () => {
  changePage(page, new URLSearchParams({}));
  rPaginator(page);
});

getPage(DB_URL, 1).then((res) => {
  res.data.forEach(addRow);
  let z = res.headers.link
    .split(",")
    .map((a) => a.split(";")[0].replace(/[<>]/g, ""));
  page.next = z[1];
  page.last = z[2];
  rPaginator(page);
});

submitBtn.addEventListener("click", () => {
  let params: {
    name?: string;
    capital?: string;
    "currency.name"?: string;
    "language.name"?: string;
  } = {};
  if (formBtns.name.value !== "") {
    params.name = formBtns.name.value;
  }
  if (formBtns.capital.value !== "") {
    params.capital = formBtns.capital.value;
  }
  if (formBtns.currency.value !== "") {
    params["currency.name"] = formBtns.currency.value;
  }
  if (formBtns.lang.value !== "") {
    params["language.name"] = formBtns.lang.value;
  }
  if (Object.keys(params).length !== 0) {
    changePage(page, new URLSearchParams({ ...params }));
    rPaginator(page);
  } else {
    alert("Please fill all the form fields!");
  }
});

tableHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    let table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchCount = 0;

    table = document.querySelector("table");
    switching = true;
    dir = "asc";

    while (switching) {
      switching = false;
      rows = table.rows;

      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].querySelectorAll("td")[header.cellIndex];
        y = rows[i + 1].querySelectorAll("td")[header.cellIndex];

        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            header.classList.remove("desc");
            header.classList.add("asc");
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            header.classList.remove("asc");
            header.classList.add("desc");
            break;
          }
        }
      }

      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchCount++;
      } else {
        if (switchCount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  });
});
