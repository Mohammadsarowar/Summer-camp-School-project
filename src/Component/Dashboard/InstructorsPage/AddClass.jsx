import React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddClass = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const saveUser = {Name:data.className, email:data.email, photoURl:data.photoURl}
    // You can perform any logic here, such as sending the form data to a server
     console.log(data);
     fetch('https://summer-camp-school-server-nu.vercel.app/class',{
        method:'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){  
       reset();
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
      Navigate('/')
        }
      })
    // Reset the form fields
   
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto lg:w-96 mt-10">
      <div className="mb-4">
        <label htmlFor="class-name" className="block mb-2 text-sm font-medium text-gray-700">
          Class Name
        </label>
        <input
          type="text"
          id="class-name"
          {...register('Name', { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="class-image" className="block mb-2 text-sm font-medium text-gray-700">
          Class Image
        </label>
        <input
          type="text"
          id="class-image"
          {...register('Image', { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="instructor-name" className="block mb-2 text-sm font-medium text-gray-700">
          Instructor Name
        </label>
        <input
          type="text"
          id="instructor-name"
          {...register('InstructorName', { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="instructor-email" className="block mb-2 text-sm font-medium text-gray-700">
          Instructor Email
        </label>
        <input
          type="email"
          id="instructor-email"
          {...register('instructorEmail', { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="available-seats" className="block mb-2 text-sm font-medium text-gray-700">
          Available Seats
        </label>
        <input
          type="number"
          id="available-seats"
          {...register('AvailableSeats', { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          type="number"
          id="price"
          {...register('Price', { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
      >
        Add
      </button>
    </form>
  );
};

export default AddClass;
