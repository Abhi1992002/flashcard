import * as z from "zod";

export const flashcardSchema = z.object({
  answer: z.string().min(1, {
    message: "answer must be at least 1 characters.",
  }),
  question: z.string(),
  color: z.string(),
  notebookId: z.string(),
});
