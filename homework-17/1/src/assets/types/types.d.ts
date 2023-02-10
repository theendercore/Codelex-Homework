import { z } from "zod";
import { User } from "./const";

// extract the inferred type
export type User = z.infer<typeof User>;
