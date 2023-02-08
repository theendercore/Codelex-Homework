import axios from "axios";

const API_URL = "http://localhost:3004";

export async function getBlogPost(id: string | number, signal?: AbortSignal) {
  const { data } = await axios.get<BlogPost>(`${API_URL}/posts/${id}`, {
    signal,
  });
  return data;
}

export async function getBlogPosts(signal?: AbortSignal) {
  const { data } = await axios.get<BlogPost[]>(`${API_URL}/posts`, {
    signal,
  });
  return data;
}

export async function getUser(id: number | string, signal?: AbortSignal) {
  const { data } = await axios.get<User>(`${API_URL}/users/${id}`);
  return data;
}

export async function getComments(id: number | string, signal?: AbortSignal) {
  const { data } = await axios.get<CommentList>(`${API_URL}/comments/${id}`, {
    signal,
  });
  return data.comments;
}
