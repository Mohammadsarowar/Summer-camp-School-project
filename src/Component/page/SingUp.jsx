import React from "react";
import { useForm } from "react-hook-form";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white rounded shadow p-8 w-96">
      <h2 className="text-2xl font-bold mb-6">Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input {...register('name', { required: 'Name is required' })} className="border border-gray-300 px-4 py-2 rounded w-full" />
          {errors.name && <p className="text-red-500 mt-2">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Photo url</label>
          <input {...register('name', { required: 'Name is required' })} className="border border-gray-300 px-4 py-2 rounded w-full" />
          {errors.name && <p className="text-red-500 mt-2">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' } })} className="border border-gray-300 px-4 py-2 rounded w-full" />
            {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must have at least 6 characters' } })} type="password" className="border border-gray-300 px-4 py-2 rounded w-full" />
            {errors.password && <p className="text-red-500 mt-2">{errors.password.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Confirm Password</label>
            <input {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must have at least 6 characters' } })} type="password" className="border border-gray-300 px-4 py-2 rounded w-full" />
            {errors.password && <p className="text-red-500 mt-2">{errors.password.message}</p>}
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Signup</button>
        </form>
      </div>
    </div>

  );
};

export default SingUp;
