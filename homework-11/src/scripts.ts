import { DB_URL, formInputs, submitBtn, tableHeaders } from "./assets/ts/const";
import { addRow, changePage, rPaginator } from "./assets/ts/constructors";
import { getPage } from "./assets/ts/restAPI";
let state: State = {
  page: {
    first: "http://localhost:3004/countries?_limit=20&_page=1",
    previous: "",
    current: "",
    next: "",
    last: "",
  },
  filters: {
    strict: false,
  },
};


getPage(DB_URL, 1).then(({ data, headers }) => {
  data.forEach(addRow);
  let z = headers.link
    .split(",")
    .map((a) => a.split(";")[0].replace(/[<>]/g, ""));
  state.page.next = z[1];
  state.page.last = z[2];
  rPaginator(state.page);
});



submitBtn.addEventListener("click", () => {
  let params: Filters = { },
    z = state.filters.strict ? "^" : "";
  if (formInputs.name.value !== "") {
    params.values["name_like"] = z + formInputs.name.value;
  }
  if (formInputs.capital.value !== "") {
    params.values["capital_like"] = z + formInputs.capital.value;
  }
  if (formInputs.currency.value !== "") {
    params.values["currency.name_like"] = z + formInputs.currency.value;
  }
  if (formInputs.lang.value !== "") {
    params.values["language.name_like"] = z + formInputs.lang.value;
  }
  if (Object.keys(params.values).length !== 0) {
    changePage(state.page, new URLSearchParams({ ...params.values }));
    rPaginator(state.page);
  } else {
    alert("Please at least one form!");
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
