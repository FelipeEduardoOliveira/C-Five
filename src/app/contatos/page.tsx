'use client';

import React from 'react';
import { Formik, Field, Form } from 'formik';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { object, string } from 'yup';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'C-five',
    template: '%s | C-five',
  },
  description: 'C-five, Eventos marcantes, marcas inesquecíveis!',
};

export default function Contatos() {
  const initialValues = {
    nome: '',
    telefone: '',
    email: '',
    mensagem: '',
  };

  const validationSchema = object({
    nome: string()
      .required('O nome é obrigatório')
      .min(3, 'O nome deve ter pelo menos 3 caracteres'),
    telefone: string()
      .required('O telefone é obrigatório')
      .min(10, 'O telefone deve ter pelo menos 10 dígitos'),
  });

  const notfy = (type: 'SUCCESS' | 'ERROR') => {
    if (type === 'SUCCESS') {
      toast.success('Contato salvo com sucesso !', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      return;
    } else {
      toast.error('Erro ao salvar o contato', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      return;
    }
  };

  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const response = await fetch('/api/resend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          name: values.nome,
          message: values.mensagem,
          phone: values.telefone,
          recipient: 'Carol',
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Erro desconhecido');
      resetForm();
      notfy('SUCCESS');
    } catch (err) {
      console.log({ err });
      notfy('ERROR');
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto text-center p-10">
      <h1 className="text-3xl md:text-5xl mb-10">Entre em contato</h1>

      {/* <ContatoInfo /> */}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="contact-form space-y-6">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-6 flex flex-col">
                <label
                  htmlFor="nome"
                  className={`flex ${
                    errors.nome && touched.nome ? 'text-[#fc8989]' : ''
                  }`}
                >
                  Nome
                </label>
                <Field
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  className="p-2 border border-gray-300 rounded text-black"
                />
              </div>

              <div className="col-span-12 md:col-span-6 flex flex-col">
                <label
                  htmlFor="telefone"
                  className={`flex ${
                    errors.telefone && touched.telefone ? 'text-[#fc8989]' : ''
                  }`}
                >
                  Telefone
                </label>
                <Field
                  id="telefone"
                  name="telefone"
                  placeholder="Telefone"
                  className="p-2 border border-gray-300 rounded text-black"
                />
              </div>

              <div className="col-span-12 flex flex-col">
                <label htmlFor="email" className="flex">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="p-2 border border-gray-300 rounded text-black"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="mensagem" className="flex">
                Mensagem
              </label>
              <Field
                id="mensagem"
                name="mensagem"
                placeholder="Mensagem"
                as="textarea"
                className="p-2 border border-gray-300 rounded text-black h-32"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </Form>
        )}
      </Formik>

      <ToastContainer />
    </div>
  );
}
