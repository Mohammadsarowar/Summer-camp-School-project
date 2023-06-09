import React from 'react';

const EnterEmail = () => {
    return (
        <div className="hero ">
  <div className="hero-content flex-col lg:flex-row gap-5">
    <img src="https://themeadapt.com/tm/eduvalt/assets/img/others/newsletter.png" className="max-w-sm rounded-full shadow-2xl bg-white" />
    <div className='flex gap-8'>
      <h1 className="text-5xl font-bold items-center">
Let’s Join To <br/>
Our Newsletters</h1>
<div className="join">
  <input className="input join-item input-bordered" placeholder="Enter your email"/>
  <button className="btn join-item rounded-r-full btn-primary">Subscribe</button>
</div>
    </div>
  </div>
</div>
    );
};

export default EnterEmail;