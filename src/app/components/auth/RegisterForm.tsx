'use client'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import { Lock, Mail, User } from 'lucide-react';
import Image from 'next/image';

// Esquema de validação com Yup
const registerSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
});

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });
  const router = useRouter();

  // Função de simulação de registro
  const onSubmit = async (data: RegisterFormData) => {
    console.log('Dados do formulário:', data);
    // Simulação de requisição à API
    try {
      // Aqui você faria a requisição real com axios ou fetch
      // const response = await axios.post('/api/auth/register', data);

      // Simulando uma resposta de sucesso
      router.push('/login'); // Redireciona para a página de login
    } catch (error) {
      console.error('Erro ao registrar', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
       <div>
              <Image alt='Bemvindo' src={'/images/criacaoconta.png'} width={500} height={50} />
            </div>

      <div>
        <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          {...register('name')}
          type="text"
          placeholder='Nome'
          className="mt-1 block w-full px-10 py-2 border rounded-2xl outline-none focus:bg-[#ffffff] bg-[#fefcf6]"
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>
      </div>
      <div>
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
      </div>
      <div>
      <div className="relative">
      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          {...register('password')}
          placeholder='Senha'
          type="password"
          className="mt-1 block w-full px-10 py-2 border rounded-2xl outline-none focus:bg-[#ffffff] bg-[#fefcf6]"
        />
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
      </div>
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 bg-[#f4deab] hover:bg-[#ffcb7c] text-[#2e241e] font-semibold p-2 gap-1  rounded-2xl transition-all duration-300"
      >
        Registrar
      </button>
    </form>
  );
};

export default RegisterForm;