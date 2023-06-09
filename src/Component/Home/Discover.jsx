import React from 'react';

const Discover = () => {
    return (
        <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row w-1/1 relative">
  <div className=''>
  <img className=' absolute left-[-0] bottom-0 w-44 rounded-lg border-8 border-indigo-500 ' src='https://images.pexels.com/photos/4626345/pexels-photo-4626345.jpeg?auto=compress&cs=tinysrgb&w=600' ></img>
 
  </div>
  <img src="https://images.pexels.com/photos/108148/pexels-photo-108148.jpeg?auto=compress&cs=tinysrgb&w=600" className="max-w-lg rounded-lg shadow-2xl border-dotted border-2 border-indigo-600" />
    <div>
      <h1 className="text-5xl font-bold">Discover Top <span className='text-6xl'>Instructors</span> Around The World</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Discover;