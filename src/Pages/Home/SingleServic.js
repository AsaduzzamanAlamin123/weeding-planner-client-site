import React from 'react';

const SingleServic = ({img , cardTitels ,bgClass , desc }) => {
    
    console.log();
    return (
        <div class={`card lg:card-side  shadow-xl  text-white ${bgClass}`}>
        <figure><img className='rounded-lg w-full h-full' src={img} alt="Movie"/></figure>
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold font-mono text-cyan-700">{cardTitels}</h2>
          <p className='font-mono font-bold' title={desc} >{desc.slice(0,50)}</p>
         
        </div>
      </div>
    );
};

export default SingleServic;