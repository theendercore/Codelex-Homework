import { z } from "zod";

export const User = z.object({
  id: z.number().int().positive(),
  name: z.string().max(50),
  surname: z.string().max(50),
  icon: z.string().url({ message: "Invalid URL" }).max(255),
});
