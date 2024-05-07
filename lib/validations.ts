import { z } from "zod";

export const questionSchema = z.object({
  title: z.string().min(10).max(150),
  explanation: z.string().min(10).max(5000),
  tags: z
    .array(z.string().min(1).max(50))
    .min(1, "you must include at least one tag")
    .max(5, "you can only include up to 5 tags"),
});
