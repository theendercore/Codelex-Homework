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
  let name,
    capital,
    currency,
    lang = "";
  
  if (formBtns.name.value !== "") {
    name = formBtns.name.value;
    console.log(name);
    changePage(page, new URLSearchParams({ name }));
  } else if (formBtns.capital.value !== "") {
    capital = formBtns.capital.value;
    console.log(capital);
    changePage(page, new URLSearchParams({ capital }));
  } else if (formBtns.currency.value !== "") {
    currency = formBtns.currency.value;
    console.log(currency);
    changePage(page, new URLSearchParams({ currency }));
  } else if (formBtns.lang.value !== "") {
    lang = formBtns.lang.value;
    console.log(lang);
    changePage(page, new URLSearchParams({ lang }));
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
