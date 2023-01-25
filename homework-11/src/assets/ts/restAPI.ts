import axios from "axios";

const getOne = async (url: string) => {
  return axios.get<Country>(url);
};

const get = async <T>(url: string) => {
  return axios.get<T>(url);
};

const get20 = async (url: string) => {
  return axios.get<Country[]>(`${url}?_limit=20`);
};

const getPage = async (url: string, page: number) => {
  return axios.get<Country[]>(`${url}?_limit=20&_page=${page}`);
};

export {getOne, get, get20, getPage };
