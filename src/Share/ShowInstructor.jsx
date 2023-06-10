import React, { useEffect, useState } from 'react';
import InstructorsCart from '../Component/Cart/InstructorsCart';

const ShowInstructor = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch("http://localhost:5000/Instructor")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, []);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {
                data.slice(0, 6).map((item) =>(<InstructorsCart key={item._id} item={item}></InstructorsCart>) )
            }
        </div>
    );
};

export default ShowInstructor;