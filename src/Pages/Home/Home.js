import React from 'react';
import Banner from './Banner';
import ServicesCard from './ServicesCard';

const Home = () => {
    return (
        <div className='p-5'>
            <Banner></Banner>
            <ServicesCard></ServicesCard>
        </div>
    );
};

export default Home;