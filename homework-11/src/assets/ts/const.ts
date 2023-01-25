const ADD = document.querySelector<HTMLButtonElement>(".ts-add");
const table = document.querySelector<HTMLDivElement>(".ts-table");
const DB_URL = "http://localhost:3004/countries";
const paginator = document.querySelector<HTMLDivElement>(".ts-paginator");

export { ADD, table, DB_URL, paginator };
