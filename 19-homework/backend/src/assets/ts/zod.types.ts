import z from "zod";

export const todoZodSchema = z.object({
  title: z.string(),
  content: z.string(),
  date: z.coerce.date(),
  isDone: z.boolean(),
});

export type TodoType = z.infer<typeof todoZodSchema>;
