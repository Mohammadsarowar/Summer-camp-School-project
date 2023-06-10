import React from 'react';

const InstructorsCart = ({item}) => {
    const {name,image} = item
    console.log(item);
    return (
        <div className=" w-96 ">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl bg-white" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default InstructorsCart;