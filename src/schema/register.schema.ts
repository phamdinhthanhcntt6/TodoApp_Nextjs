import z from "zod";

const RegisterBody = z.object({
  email: z.string().email("Invalid email format"),
});

type RegisterBodyType = z.infer<typeof RegisterBody>;

const RegisterBodyDefaultValues = {
  email: "",
};

export {
  RegisterBody,
  RegisterBodyDefaultValues as formRegisterDefaultValues,
  type RegisterBodyType,
};
