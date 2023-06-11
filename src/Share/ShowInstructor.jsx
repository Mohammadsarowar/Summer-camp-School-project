import React, { useEffect, useState } from 'react';
import InstructorsCart from '../Component/Cart/InstructorsCart';
import useTitle from './useTitel';

const ShowInstructor = () => {
    useTitle('Instructor')
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch("https://summer-camp-school-server-nu.vercel.app/Instructor")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, []);
    return (
        <>
          <div><h2 className='text-5xl text-center font-mono mt-8'>Top Class Instructor</h2></div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {
                data.slice(0, 6).map((item) =>(<InstructorsCart key={item._id} item={item}></InstructorsCart>) )
            }
        </div></>
    );
};

export default ShowInstructor;