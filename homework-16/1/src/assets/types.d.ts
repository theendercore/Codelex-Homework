type BlogPost = {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  text: string;
  authorId: number;
};

type BlogComment = {
  id: number;
  blog_id: number;
  author_id: number;
  text: string;
};

type User = {
  id: number;
  name: string;
  surname: string;
  icon: string;
};
