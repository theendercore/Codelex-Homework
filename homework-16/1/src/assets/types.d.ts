type BlogPost = {
  id: number;
  image: string;
  content: BlogContent;
  authorId: number;
  commentListId: number;
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

type BlogComment = {
  id: number;
  authorId: number; 
  text: string;
};

type User = {
  id: number;
  name: string;
  surname: string;
  icon: string;
};
