type BlogPost = {
  id: number;
  content: BlogContent;
  authorId: number;
};

type BlogContent = {
  image: string;
  title: string;
  excerpt: string;
  text: string;
};

type BlogComment = {
  id: number;
  blogId: number;
  authorId: number;
  text: string;
};

type User = {
  id: number;
  name: string;
  surname: string;
  icon: string;
};
