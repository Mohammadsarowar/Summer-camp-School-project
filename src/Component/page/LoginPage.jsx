import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../route/AuthProvider';
import {FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2';
const LoginPage = () => {
    const {SingIn,googleSignIn} = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    SingIn(data.email, data.password)
    .then(result=>{
        console.log(result);
        if(result){
          Swal.fire({
            icon: 'success',
            title: 'Login Success',
            showConfirmButton: false,
            timer: 1500
          })
        }
    })
  };
  const googleLogin = () =>{
    googleSignIn()
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded shadow p-8 w-80">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        </form>
          <div className='text-center'><button onClick={googleLogin} className='btn rounded-full hover:bg-blue-500'><FaGoogle className=' text-lg'/></button></div>
      </div>
    
    </div>
  );
};

export default LoginPage;
