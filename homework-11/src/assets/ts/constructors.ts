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

const addNumber = (url: string, label: string) => {
  return `<a href="${url}">${label}</a>`;
};
const changePage = (page: Page) => {
  table.innerHTML = "";
  get<Country[]>(page.next).then((res) => {
    res.data.forEach(addRow);
    let z = res.headers.link
      .split(",")
      .map((a) => a.split(";")[0].replace(/[<>]/g, ""));
    page.previous = z[1];
    page.next = z[2];
  });
};

export { addRow, addNumber };
