import {z} from 'zod';

export type SignUpFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z
    .string()
    .regex(userNameRegex, 'Username inválido')
    .min(3, 'username muito curto')
    .max(50, 'username muito grande')
    .toLowerCase(),
  fullName: z
    .string()
    .min(3, 'Nome muito curto')
    .max(50, 'Nome muito grande')
    .transform(value => {
      return value
        .split(' ')
        .map(name => name.charAt(0).toUpperCase() + name.slice(1))
        .join(' ');
    }),
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
