export type TodoType = {
  _id: string;
  title: string;
  content: string;
  date: Date;
  isDone: boolean;
};

export type TaskType = Omit<TodoType, "_id">;
