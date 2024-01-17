import {z} from 'zod';

export type LoginFormType = {
  email: string;
  password: string;
};

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
