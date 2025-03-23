'use client';

import React from 'react';
import { Formik, Field, Form } from 'formik';

const initialValues = {
  nome: '',
  telefone: '',
  email: '',
  mensagem: '',
};

const handleSubmit = (values: typeof initialValues) => {
  console.log(values);
};

export default function Contatos() {
  return (
    <div className="w-full max-w-lg mx-auto text-center p-10">
      <h1 className="text-3xl md:text-5xl mb-10">Entre em contato</h1>

      {/* <ContatoInfo /> */}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="contact-form space-y-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 flex flex-col">
              <label htmlFor="nome" className="flex">
                Nome
              </label>
              <Field
                id="nome"
                name="nome"
                placeholder="Nome"
                className="p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col">
              <label htmlFor="telefone" className="flex">
                Telefone
              </label>
              <Field
                id="telefone"
                name="telefone"
                placeholder="Telefone"
                className="p-2 border border-gray-300 rounded"
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
                className="p-2 border border-gray-300 rounded"
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
              className="p-2 border border-gray-300 rounded h-32"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            Enviar
          </button>
        </Form>
      </Formik>
    </div>
  );
}
