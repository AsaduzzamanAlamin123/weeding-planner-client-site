import React from 'react';

const SingleServiceHome = ({service}) => {
    return (
        <div class="card w-full bg-base-100 shadow-xl">
  <figure><img className='mt-5' src={service.img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="text-center text-primary font-mono font-bold  text-3xl">{service.name}!</h2>
    <p className='text-lime-900 font-mono'>{service.desc}</p>
    
  </div>
</div>
    );
};

export default SingleServiceHome;