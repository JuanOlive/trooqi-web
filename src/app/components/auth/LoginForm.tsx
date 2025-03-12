'use client'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import { Mail, Lock } from 'lucide-react'; // Importando ícones do Lucide
import Image from 'next/image';

// Esquema de validação com Yup
const loginSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
});

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    console.log('Dados do formulário:', data);
    try {
      localStorage.setItem('token', 'fake-token');
      router.push('/');
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Campo de E-mail */}

      <div>
        <Image alt='Bemvindo' src={'/images/bemvindo.png'} width={500} height={50} />
      </div>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          {...register('email')}
          type="email"
          placeholder='E-mail'
          className="mt-1 block w-full px-10 py-2 border rounded-2xl outline-none focus:bg-[#ffffff] bg-[#fefcf6]"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>

      {/* Campo de Senha */}
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          {...register('password')}
          type="password"
          placeholder='Senha'
          className="mt-1 block w-full px-10 py-2 border rounded-2xl outline-none focus:bg-[#ffffff] bg-[#fefcf6]"
        />
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
      </div>

      {/* Botão de Enviar */}
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 bg-[#f4deab] hover:bg-[#ffcb7c] text-[#2e241e] font-semibold p-2 gap-1  rounded-2xl transition-all duration-300"
      >
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;