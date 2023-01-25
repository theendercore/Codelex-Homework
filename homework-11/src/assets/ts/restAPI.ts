import axios from 'axios';

const getOne = async  (url:string) => { 
  return axios.get<Country>(url)
}

const get = async  <T>(url:string) => { 
  return axios.get<T>(url)
}


const get20 = async(url:string) => { 
  return axios.get<Country[]>(`${url}?_limit=20`)
}

export {get, get20}