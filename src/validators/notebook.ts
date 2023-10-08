import * as z from "zod";

export const notebookSchema = z.object({
  name: z.string().min(1, {
    message: "name must be at least 1 characters.",
  }),
  color: z.string(),
});
