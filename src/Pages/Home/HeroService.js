import React from 'react';
import plan from '../../assest/picture/planner.webp'

const HeroService = () => {
    return (
        <div class="hero min-h-screen bg-base-100 ">
  <div class="hero-content flex-col lg:flex-row">
    <img className='rounded' src={plan} />
    <div>
      <h1 class="text-5xl font-bold font-mono">Planning is a big secreat for <span className='text-red-800'>succeess</span> in wedding planner sector !</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button type="button" class="btn text-pink-700 font-bold font-mono  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
  get started
</button>
    </div>
  </div>
</div>
    );
};

export default HeroService;