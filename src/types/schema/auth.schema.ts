import z from "zod"

export const loginSchema = z.object({
  email: z.string().email("Your email is weird"), // harus valid dengan format valid email
  password: z.string().min(6,"Input 6 characters!").max(12, "too much characters!") // bisa buat validation min-max
})