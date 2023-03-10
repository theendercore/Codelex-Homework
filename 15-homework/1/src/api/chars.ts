import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";
const DB_URL = "https://rickandmortyapi.com/api/character";
const db_page = "https://rickandmortyapi.com/api/character/?page=";

export function getChars() {
  return axios.get<CharList>(DB_URL).then(({ data }) => data);
}

export function getCharsParams({
  pageParam = 0,
}: QueryFunctionContext<string[]>) {
  return axios
    .get<CharList>(`${db_page}${pageParam}`)
    .then(async ({ data }) => data);
}

export function getCharByID(id: string) {
  return axios.get<Character>(`${DB_URL}/${id}`).then(async ({ data }) => {
    data.episode[0] = await getEpisode(data.episode[0]).then((episode) => {
      return episode.name;
    });
    return data;
  });
}

export function getEpisode(url: string) {
  return axios.get<Episode>(`${url}`).then(({ data }) => data);
}
