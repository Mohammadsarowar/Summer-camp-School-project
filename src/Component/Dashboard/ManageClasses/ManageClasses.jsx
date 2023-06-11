import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaAtlas, FaRegClock, FaUserNurse, FaDollarSign } from "react-icons/fa";
const ManageClasses = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://summer-camp-school-server-nu.vercel.app/class')
        return res.json();
    })
    console.log(users);
    return (
        <div>
           <div className=" grid lg:grid-cols-2 mt-8 md:grid-cols-2 grid-cols-1 gap-5">
        {users.map((item) => (
          <div key={item._id} className="card w-96 glass mx-auto">
            <figure>
              <img className="" src={item.Image} alt="Class!" />
            </figure>
            <div className="card-body">
              <div className="flex justify-evenly">
                <p className="font-light flex items-center gap-2">
                  <FaAtlas />
                  {item.AvailableSeats} Lessons{" "}
                </p>
                <p className="font-light flex items-center gap-2">
                  <FaRegClock />
                  12h 36m
                </p>
                <p className="font-light flex items-center gap-2">
                  <FaUserNurse /> Students
                </p>
              </div>

              <p className="text-2xl font-mono">{item.Name}</p>

             
              <div className="flex justify-between">
                {" "}
                <h2 className="text-lg font-serif">
                  Available Seats: {item.AvailableSeats}
                </h2>
                <h2 className="flex items-center text-2xl text-blue-700">
                  <FaDollarSign />
                  {item.Price}
                </h2>
              </div>
              <div>
                         <div tabIndex={0} className=" flex items-center avatar">
        <div className="w-10 rounded-full">
          <img src={item.Image} />
         
        </div>
         <h2 className="ml-2 text-lg hover:text-blue-600 font-sans">{item.InstructorName}</h2>
      </div>
              </div>
              <div className="divider"></div>
              <div className="card-actions justify-between">
              <div className="join mx-auto">
  <input className="join-item btn btn-primary" type="radio" name="options" aria-label="approved" />
  <input className="join-item btn" type="radio" name="options" aria-label="pending" />
  <input className="join-item btn" type="radio" name="options" aria-label="denied" />
</div>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default ManageClasses;