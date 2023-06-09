import React, { useEffect, useState } from "react";
import { FaAtlas, FaRegClock, FaUserNurse, FaDollarSign } from "react-icons/fa";
const ShowClass = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        <h2 className=" text-5xl text-center my-10">
          Our{" "}
          <span className="italic border-b-4 border-r-blue-700 text-blue-700 bold">
            {" "}
            Featured
          </span>{" "}
          Courses
        </h2>
      </div>
      <div className=" grid grid-cols-3 gap-5">
        {data.slice(0, 6).map((item) => (
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

              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
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

              <div className="divider"></div>
              <div className="card-actions justify-between">
              <div tabIndex={0} className=" flex items-center avatar">
        <div className="w-10 rounded-full">
          <img src={item.Image} />
         
        </div>
         <h2 className="ml-2 text-lg hover:text-blue-600 font-sans">{item.InstructorName}</h2>
      </div>
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowClass;
