import z from "zod";

const SendCodeBody = z.object({
  email: z.string().email("Invalid email format"),
});

type SendCodeBodyType = z.infer<typeof SendCodeBody>;

export { SendCodeBody, type SendCodeBodyType };

const RegisterBody = z.object({
  email: z.string().email("Invalid email format"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .optional(),
  isRemember: z.boolean().optional(),
});

type RegisterBodyType = z.infer<typeof RegisterBody>;

export { RegisterBody, type RegisterBodyType };

const LoginBody = z.object({
  email: z.string().email("Invalid email format"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .optional(),
  isRemember: z.boolean().optional(),
});

type LoginBodyType = z.infer<typeof LoginBody>;

export { LoginBody, type LoginBodyType };
