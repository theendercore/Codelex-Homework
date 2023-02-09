import axios from "axios";

const API_URL = "http://localhost:3004";

export async function getBlogPost(id: string | number, signal?: AbortSignal) {
  const { data } = await axios.get<BlogPost>(`${API_URL}/posts/${id}`, {
    signal,
  });
  return data;
}

export async function editBlogPost(
  post: {
    id: number;
    image?: string;
    content?: BlogContent;
  },
  signal?: AbortSignal
) {
  const { data } = await axios.patch<BlogPost>(
    `${API_URL}/posts/${post.id}`,
    post,
    {
      signal,
    }
  );
  return data;
}

export async function getBlogPosts(signal?: AbortSignal) {
  const { data } = await axios.get<BlogPost[]>(`${API_URL}/posts`, {
    signal,
  });
  return data;
}

export async function getUser(id: number | string, signal?: AbortSignal) {
  const { data } = await axios.get<User>(`${API_URL}/users/${id}`, { signal });
  return data;
}

export async function getUsers(signal?: AbortSignal) {
  const { data } = await axios.get<User[]>(`${API_URL}/users`, { signal });
  return data;
}

export async function getComments(id: string, signal?: AbortSignal) {
  const { data } = await axios.get<BlogComment[]>(
    `${API_URL}/comments?blogId=${id}`,
    {
      signal,
    }
  );
  return data;
}

export async function postComment(comment: Omit<BlogComment, "id">) {
  const { data } = await axios.post<BlogComment>(
    `${API_URL}/comments`,
    comment
  );
  return data;
}

export async function postNewPost(post: Omit<BlogPost, "id">) {
  const { data } = await axios.post<BlogPost>(`${API_URL}/posts`, post);
  return data;
}
