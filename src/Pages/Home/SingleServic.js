import React from 'react';

const SingleServic = ({weed}) => {
    
    console.log(weed);
    return (
        <div class="card card-side bg-base-100 shadow-xl ">
        <figure><img className='rounded-lg w-full h-full' src={weed.img} alt="Movie"/></figure>
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold font-mono text-cyan-700">{weed.name}</h2>
          <p className='font-mono font-bold' title={weed.desc}>{weed.desc.slice(0,50)}</p>
         
        </div>
      </div>
    );
};

export default SingleServic;