type BlogPost = {
  id: number;
  image: string;
  content: BlogContent;
  author: User;
  comments: BlogComment[];
};

type BlogPostWithId = {
  id: number;
  image: string;
  content: BlogContent;
  author: User;
  commentsId: number;
};

type BlogPostSchema = {
  id: number;
  image: string;
  content: BlogContent;
  authorId: number;
  commentsListId: number;
};

type BlogContent = {
  title: string;
  excerpt: string;
  text: string;
};

type CommentList = {
  id: number;
  comments: BlogCommentSchema[];
};

type BlogCommentSchema = {
  id: number;
  authorId: number; 
  text: string;
};

type BlogComment = {
  id: number;
  author: User;
  text: string;
};

type User = {
  id: number;
  name: string;
  surname: string;
  icon: string;
};
