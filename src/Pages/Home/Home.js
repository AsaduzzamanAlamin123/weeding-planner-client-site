import React from 'react';
import Appoinment from './Appoinment';
import Banner from './Banner';
import Footer from './Footer';
import HeroService from './HeroService';
import HomeService from './HomeService';
import Review from './Review';
import ServicesCard from './ServicesCard';



const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <ServicesCard></ServicesCard>
            <HeroService></HeroService>
            <HomeService></HomeService>
            <Appoinment></Appoinment>
            <Review></Review>
            <Footer></Footer>
           
           
           
        </div>
    );
};

export default Home;