import { ADD } from "./assets/ts/const";
import { get20 } from "./assets/ts/restAPI";
import { addRow } from "./assets/ts/table";

ADD.addEventListener("click", () => {
  console.log("click");
  addRow({
    name: "Togo",
    code: "TG",
    capital: "Lomé",
    region: "AF",
    currency: {
      code: "XOF",
      name: "West African CFA franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "https://restcountries.eu/data/tgo.svg",
    dialling_code: "+228",
    isoCode: "768",
  });
});

get20("http://localhost:3004/countries").then((res) => {
  console.log(res.data);
  res.data.forEach(addRow);
});
