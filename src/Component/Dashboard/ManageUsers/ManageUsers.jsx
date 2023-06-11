import React from 'react';

import { useQuery } from '@tanstack/react-query';
import { FaRegTrashAlt, FaUserCog, FaUserGraduate } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageUsers = () => {
 
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://summer-camp-school-server-nu.vercel.app/users')
        return res.json();
    })
    const handleMakeAdmin = user =>{
        fetch(`https://summer-camp-school-server-nu.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructors = user =>{
        fetch(`http://localhost:5000/users/Instructors/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: `${user.name} is an Instructors Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
             
             <h2 className='text-3xl font-mono text-center mt-8 border-b-4'>Total User: {users.length}</h2>
             <div className="overflow-x-auto mt-8">
  <table className="table table-md table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th>#</th> 
        <td>Name</td> 
        <td>Email</td> 
      
        <td>Make Admin</td> 
        <td>Make Instructors</td> 
        <td>Delete</td>
        <th></th> 
      </tr>
    </thead> 
    <tbody>
    {users.map((user,index) =>(<tr key={user._id}>
        <th>{index+1}</th> 
        <td>{user?.name}</td> 
        <td>{user?.email}</td> 
     
        <td>{ user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserCog></FaUserCog></button> 
                                    }</td> 
                                    <td>{ user.pud === 'Instructors' ? 'Instructors' :
                                    <button onClick={() => handleMakeInstructors(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserGraduate ></FaUserGraduate></button> 
                                    }</td>
        <td><button onClick={()=>handleDelete(user)} className='btn'><FaRegTrashAlt/></button></td>
    
      </tr>))
    }
     
      
    </tbody> 
    
  </table>
</div>
        </div>
    );
};

export default ManageUsers;