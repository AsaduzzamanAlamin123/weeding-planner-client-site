import React from 'react';
import planning from '../../assest/picture/planner.webp'
import photographer from '../../assest/picture/photographer.webp'
import location from '../../assest/picture/location.jpeg';
import SingleServic from './SingleServic';

const ServicesCard = () => {
   
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mt-5' >
         

            <SingleServic  desc='every weedings needs a good location or venue.as a weeding planner we help you choose a good location for your weeding.because it is weeding planners deuty part.  ' bgClass='bg-gradient-to-r from-secondary to-primary' cardTitels = 'Planning' img={planning}></SingleServic>
            <SingleServic  desc='If You think about a weeding then you must need photgraphy.it helps us keeps our fantastic moment, and after 5-10 years it is makes us nostalgic.' bgClass='bg-secondary' cardTitels = 'Photography' img={photographer }></SingleServic>
            <SingleServic  desc='every weedings needs a good location or venue.as a weeding planner we help you choose a good location for your weeding.because it is weeding planners deuty part.  ' bgClass='bg-gradient-to-r from-primary to-secondary' cardTitels = 'Location' img={location }></SingleServic>
            
        </div>
    );
};

export default ServicesCard;