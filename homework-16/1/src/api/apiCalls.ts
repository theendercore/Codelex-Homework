import axios from "axios";

const API_URL = "http://localhost:3004";

export async function getBlogPost(id: string | number) {
  const { data } = await axios.get<BlogPostSchema>(`${API_URL}/posts/${id}`);
  return <BlogPostWithId>{
    id: data.id,
    image: data.image,
    content: data.content,
    author: await getUser(data.authorId),
    commentsId: data.commentsListId,
  };
}

export async function getBlogPosts() {
  const { data } = await axios.get<BlogPostSchema[]>(`${API_URL}/posts`);
  return data;
}

async function getUser(id: number | string) {
  const { data } = await axios.get<User>(`${API_URL}/users/${id}`);
  return data;
}

export async function getComments(id: number | string) {
  const { data } = await axios.get<CommentList>(`${API_URL}/comments/${id}`);
  let { comments } = data;
  let newComments: BlogComment[] = [];
  comments.forEach(async (comment) => {
    let author = await getUser(comment.authorId);
    newComments.push({
      id: comment.id,
      author: author,
      text: comment.text,
    });
  });
  return newComments;
}
