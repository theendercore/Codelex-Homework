const ADD = document.querySelector<HTMLButtonElement>(".ts-add");
const table = document.querySelector<HTMLDivElement>(".ts-table");
const DB_URL = "http://localhost:3004/countries";
const paginator = document.querySelector<HTMLDivElement>(".ts-paginator");
const tableHeaders = document.querySelectorAll("th");
const submitBtn = document.querySelector<HTMLButtonElement>(".ts-btn-submit");
const formBtns = {
  name: document.querySelector<HTMLInputElement>(".ts-in-name"),
  capital: document.querySelector<HTMLInputElement>(".ts-in-capital"),
  currency: document.querySelector<HTMLInputElement>(".ts-in-currency"),
  lang: document.querySelector<HTMLInputElement>(".ts-in-lang"),
};

export { ADD, table, DB_URL, paginator, tableHeaders, submitBtn, formBtns };
