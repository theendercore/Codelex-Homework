interface Country {
  name: string;
  code: string;
  capital: string;
  region: string;
  currency: Currency;
  language: Language;
  flag: string;
  dialling_code: string;
  isoCode: string;
}

interface Language {
  code: string;
  name: string;
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}
interface State {
  page: Page
  filters: Filters
}

interface Page {
  first: string;
  previous: string;
  current: string;
  next: string;
  last: string;
}

interface Filters {
  strict?:boolean;
  values?:{
    name_like?: string;
    capital_like?: string;
    "currency.name_like"?: string;
    "language.name_like"?: string;
  }
}
