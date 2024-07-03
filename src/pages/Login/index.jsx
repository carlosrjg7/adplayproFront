import React from "react";

// creame un componente de funcion para login y exportelo usan estilos de tailwind y coloca el formulario con react-hook-form
const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96 p-6 bg-white rounded-lg shadow-lg'>
        <h1 className='text-3xl font-semibold text-center'>Login</h1>
        <form className='mt-6'>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-800 font-semibold'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full p-2 mt-1 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
              placeholder='Enter your email'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-gray-800 font-semibold'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='w-full p-2 mt-1 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
              placeholder='Enter your password'
            />
          </div>
          <button
            type='submit'
            className='w-full py-2 mt-2 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
