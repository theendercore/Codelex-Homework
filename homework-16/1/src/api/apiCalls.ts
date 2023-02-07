import axios from "axios";

const API_URL = "http://localhost:3004";

export async function getBlogPost(id: string | number, signal?: AbortSignal) {
  const { data } = await axios.get<BlogPostSchema>(`${API_URL}/posts/${id}`, {
    signal,
  });
  return <BlogPostWithId>{
    id: data.id,
    image: data.image,
    content: data.content,
    author: await getUser(data.authorId),
    commentsId: data.commentsListId,
  };
}

export async function getBlogPosts(signal?: AbortSignal) {
  const { data } = await axios.get<BlogPostSchema[]>(`${API_URL}/posts`, {
    signal,
  });
  return data;
}

async function getUser(id: number | string) {
  const { data } = await axios.get<User>(`${API_URL}/users/${id}`);
  return data;
}

export async function getComments(id: number | string, signal?: AbortSignal) {
  const { data } = await axios.get<CommentList>(`${API_URL}/comments/${id}`, {
    signal,
  });
  let { comments } = data;
  let newComments: BlogComment[] = [];
  comments.forEach(async (comment) => {
    newComments.push({
      id: comment.id,
      author: {id:-1,name:"error", surname:"error", icon:"img"},
      //  await getUser(comment.authorId),
      text: comment.text,
    });
  });
  return newComments;
}
