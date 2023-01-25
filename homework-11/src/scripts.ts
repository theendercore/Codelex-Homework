import { ADD, DB_URL, paginator, table } from "./assets/ts/const";
import { addRow, addNumber } from "./assets/ts/constructors";
import { get, getPage } from "./assets/ts/restAPI";

let page = {
  first: "http://localhost:3004/countries?_limit=20&_page=1",
  previous: "",
  next: "",
  last: "",
};

ADD.addEventListener("click", () => {
  table.innerHTML = "";
  get<Country[]>(page.next).then((res) => {
    res.data.forEach(addRow);
    let z = res.headers.link
      .split(",")
      .map((a) => a.split(";")[0].replace(/[<>]/g, ""));
    page.previous = z[1];
    page.next = z[2];
  });
});

getPage(DB_URL, 1).then((res) => {
  res.data.forEach(addRow);
  let z = res.headers.link
    .split(",")
    .map((a) => a.split(";")[0].replace(/[<>]/g, ""));
  page.next = z[1];
  page.last = z[2];
  rPaginator()
});

const rPaginator = () => {
  paginator.innerHTML +=
    addNumber(page.first, "first") +
    addNumber(page.previous, "previous") +
    addNumber(page.next, "next") +
    addNumber(page.last, "last");
};
