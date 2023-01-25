import { table } from "./const";

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

export { addRow };
