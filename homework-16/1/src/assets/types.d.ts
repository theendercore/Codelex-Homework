type BlogPost = {
  id: number;
  image: string;
  content: BlogContent;
  author: User;
  comments: BlogComment[];
};

type BlogContent = {
  title: string;
  excerpt: string;
  text: string;
};

type User = {
  name: string;
  surname: string;
  icon: string;
};

type BlogComment = {
  author: User;
  text: string;
};
