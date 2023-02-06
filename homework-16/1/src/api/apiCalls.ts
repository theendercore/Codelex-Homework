import axios from "axios";

const API_URL = "http://localhost:3004/posts";

export function getBlogPost(id: string) {
  return axios.get<BlogPost>(`${API_URL}/${id}`).then(({ data }) => data);
}
