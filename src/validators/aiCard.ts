import * as z from "zod";

export const aiCardSchema = z.object({
  notebook: z.string(),
  color: z.string(),
  title: z.string(),
  description: z.string(),
});
