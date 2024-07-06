import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { userService } from "../../services";
import Alert from "../../components/errors/alert";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const validationSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be at least 6 characters"),
});

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "prueba3@gmail.com",
      password: "1234",
    },
  });

  const { mutate } = useMutation({
    mutationFn: userService.login,
    onError: (error) => {
      setError(error);
      toast.error(error);
    },
    onSuccess: (data) => {
      console.log(data);
      navigate("/dashboard");
      toast.success("Login successfully");
    },
  });

  const onSubmit = (data) => mutate(data);

  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <div className='bg-white p-8 rounded shadow-md w-96'>
        {error && <Alert message={error} />}
        <h1 className='text-2xl font-bold mb-4'>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              {...register("email", { required: true })}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.email && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.email.message}
              </p>
            )}
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              {...register("password", { required: true })}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.password && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type='submit'
            className='w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
