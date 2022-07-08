import React from 'react';
import quotes from '../../assest/icon/quote.svg'
import pepole1 from '../../assest/avatar/download.jpg';
import pepole2 from '../../assest/avatar/images (1).jpg';
import pepole3 from '../../assest/avatar/images.jpg';
import ReviewCard from './ReviewCard';
const Review = () => {
    const reviews = [
        {
                name:'Winson Harry',
                img:pepole1,
                Text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatibus ipsam"
        },
        {
                name:'jonson walton',
                img:pepole2,
                Text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatibus ipsam"
        },
        {
                name:'bolton Harry',
                img:pepole3,
                Text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatibus ipsam"
        },
    ]
    return (
        <div >
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-xl font-bold font-mono text-primary'>Testomonials</h2>
                    <h2 className='text-3xl font-mono'>What our client say</h2>
                </div>
                <div>
                    <img className='w-[200px]' src={quotes} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review=><ReviewCard review={review}></ReviewCard>)
                }

            </div>
            
        </div>
    );
};

export default Review;