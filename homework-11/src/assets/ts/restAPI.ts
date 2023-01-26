import axios from "axios";

const get = async <T>(url: string) => {
  return axios.get<T>(url);
};

const getPage = async (url: string, page: number) => {
  return get<Country[]>(`${url}?_limit=20&_page=${page}`);
};

export { get, getPage };
