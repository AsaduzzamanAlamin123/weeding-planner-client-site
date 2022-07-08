import React from 'react';
import banner from '../../assest/picture/pexels-photo-758898.jpg';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-accent rounded-lg mt-5">
        <div class="hero-content flex-col lg:flex-row-reverse" >
       
        
         <img  data-aos="flip-right"  className='rounded-lg' src={banner} />
        
         
          <div>
            <h1 data-aos="fade-down-right" class="text-5xl font-bold uppercase font-mono" >make <span className='text-red-900'>fancy</span> your <span className='text-secondary'>weeding</span> with us</h1>
            <p class="py-6 font-bold font-mono ">Religious, Non-Religious & Interfaith Marriage Ceremonies, Micro-weddings, and Elopements. Officiants, Destination Weddings, Microweddings, & Elopement Wedding Packages In Colorado. Wedding Officiant. Elopements. Destinations: Breckenridge, Dillon, Vail/Beaver Creek, Aspen.</p>
            <button type="button" class="btn  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
  get started
</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;