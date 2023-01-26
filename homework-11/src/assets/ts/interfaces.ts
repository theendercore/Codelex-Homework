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
interface Page {
  first: string;
  previous: string;
  current: string;
  next: string;
  last: string;
}