import { paginator, table } from "./const";
import { get } from "./restAPI";

const addRow = (country: Country) => {
  table.innerHTML += `
    <tr>
        <td class="cell">${country.name}</td>
        <td class="cell">${country.capital}</td>
        <td class="cell">${country.currency.name}</td>
        <td class="cell">${country.language.name}</td>
    </tr>
    `;
};

const addNumber = (url: string, label: string, cssClass: string) => {
  return `<a href="${url}" class="page .ts-${cssClass}">${label}</a>`;
};

const changePage = (page: Page, params?: URLSearchParams) => {
  let link = page.next;
  table.innerHTML = "";
  if (params !== null) {
    link = page.first + "&" + params.toString();
    console.log(link);
  }
  get<Country[]>(link).then((res) => {
    res.data.forEach(addRow);
    if (res.headers.link !== undefined) {
      page.current = page.next;
      let z = res.headers.link
        .split(",")
        .map((a) => a.split(";")[0].replace(/[<>]/g, ""));
      page.previous = z[1];
      page.next = z[2];
    }
  });
};

const rPaginator = (page: Page) => {
  if (page.first === page.last) {
    paginator.classList.add("disabled");
  } else {
    paginator.classList.remove("disabled");
    paginator.innerHTML =
      addNumber(page.first, "<< 1", "first") +
      addNumber(page.previous, "prv", "previous") +
      `<span class="page">${page.current}</span>` +
      addNumber(page.next, "nxt", "next") +
      addNumber(page.last, "12 >>", "last");
  }
};

export { addRow, addNumber, changePage, rPaginator };
