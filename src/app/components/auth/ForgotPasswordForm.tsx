'use client'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Esquema de validação com Yup
const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
});

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPasswordForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  // Função de simulação de recuperação de senha
  const onSubmit = async (data: ForgotPasswordFormData) => {
    console.log('Dados do formulário:', data);
    // Simulação de requisição à API
    try {
      // Aqui você faria a requisição real com axios ou fetch
      // const response = await axios.post('/api/auth/forgot-password', data);
      alert('E-mail de recuperação enviado!');
    } catch (error) {
      console.error('Erro ao enviar e-mail', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">E-mail</label>
        <input
          {...register('email')}
          type="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Enviar
      </button>
    </form>
  );
};

export default ForgotPasswordForm;