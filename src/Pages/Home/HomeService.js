import React from 'react';
import stage from '../../assest/icon/stage-removebg-preview.png'
import bride from '../../assest/icon/koinna-removebg-preview.png'
import photography from '../../assest/icon/photograpy-removebg-preview.png'
import planner from '../../assest/icon/myplanner-removebg-preview.png'
import groom from '../../assest/icon/daman-removebg-preview.png'
import guest from '../../assest/icon/guest_managemant-removebg-preview.png'
import SingleServiceHome from './SingleServiceHome';

const HomeService = () => {
    const allServicce = [
        {
            name:'stage grooming',
            img:stage,
            desc:'we provide stage grooming service.we ensure whice stage have to be vry nice'

        },
        {
            name:'bride cloth',
            img:bride,
            desc:'we provide stage grooming service.we ensure whice stage have to be vry nice'

        },
        {
            name:'Photography',
            img:photography,
            desc:'we provide stage grooming service.we ensure whice stage have to be vry nice'

        },
        {
            name:'Planner Activites',
            img:planner,
            desc:'we provide stage grooming service.we ensure whice stage have to be vry nice'

        },
        {
            name:'Grrom Cloth',
            img:groom,
            desc:'we provide stage grooming service.we ensure whice stage have to be vry nice'

        },
        {
            name:'Guest Managmment',
            img:guest,
            desc:'we provide stage grooming service.we ensure whice stage have to be vry nice'

        },
    ]
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mt-5 mb-5'>
            {
                allServicce.map(service =><SingleServiceHome service={service}></SingleServiceHome>)
            }
            
        </div>
    );
};

export default HomeService;