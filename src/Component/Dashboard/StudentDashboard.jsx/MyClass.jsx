import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaPaypal, FaRegTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const MyClass = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://summer-camp-school-server-nu.vercel.app/class')
        return res.json();
    })
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
       #
        </th>
         <th>Image</th>
        <th>Name</th>
        <th>Class Name</th>
        <th>Pay</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index)=>( <tr>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user?.Image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td>
        <td> <div>
              <div className="font-bold">{user?.InstructorName}</div>
              <div className="text-sm opacity-50">United States</div>
            </div></td>
        <td>
          {user?.Name}
          <br/>
       
        </td>
        <td><Link className="btn bg-blue-500 "><FaPaypal/></Link></td>
        <th>
          <button className="btn btn-ghost bg-red-700"><FaRegTrashAlt/></button>
        </th>
      </tr>

        ))
      }
     
 
  
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyClass;