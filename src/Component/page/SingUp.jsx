
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../route/AuthProvider";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
  
const SingUp = () => {
   const {createUser} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email,data.password)
    .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser);

    })
    
  };
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
          <label className="block mb-2">Already have an account <Link to='/login' className="link link-primary" to='login'>Login</Link></label>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Signup</button>
        </form>
        <div className=" text-center">
        <div className='text-center'><button className='btn rounded-full hover:bg-blue-500'><FaGoogle className=' text-lg'/></button></div></div>
        
      </div>
    </div>

  );
};

export default SingUp;
