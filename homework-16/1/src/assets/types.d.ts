type BlogPost = {
  id: number;
  img: string;
  title: string;
  excerpt: string;
  content: BlogContent;
  author: User;
  comments: Comment[];
};

type BlogContent = {
  text: string;
};

type User = {
  name: string;
  surname: string;
  icon: string;
};

type Comment = {
  author: User;
  text: string;
};
