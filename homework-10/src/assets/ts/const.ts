const box = document.querySelector<HTMLDivElement>(".box");
const dbUrl = "http://localhost:3004/players";
const addScreen = document.querySelector<HTMLDivElement>(".add-screen");
const addTitle = addScreen.querySelector<HTMLInputElement>(".add-screen--title");
const addText = addScreen.querySelector<HTMLInputElement>(".add-screen--text");
const addURL = document.querySelector<HTMLInputElement>(".add-screen--skin");
const addBtn = addScreen.querySelector<HTMLButtonElement>(".add-screen__btn");

export { box, dbUrl, addText, addTitle, addURL, addBtn };