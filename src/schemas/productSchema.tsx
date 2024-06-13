import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(30, "Name must be at most 30 characters"),
  description: z
    .string()
    .max(200, "Description must be at most 200 characters")
    .optional(),
  price: z.number().positive("Price must be positive"),
  image: z.string().min(1, "Product Image is required"),
  date: z.string().min(1, "Date is required"), // what does this date represent?
});

export type ProductData = z.infer<typeof productSchema>;
