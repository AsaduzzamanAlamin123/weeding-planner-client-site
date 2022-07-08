import React from 'react';
import plannerbro from '../../assest/picture/plannerpic.png'
import appoinment from '../../assest/picture/appointment.png'
import MyHoverButton from '../../Shared/MyHoverButton';

const Appoinment = () => {
    return (
        <div className='flex justify-center items-center rounded-lg mt-14'style={{
            background:`url(${appoinment})`
        }}>
            <div className='flex-1 hidden sm:block '>
               <img className='mt-[-250px]' src={plannerbro} alt="" /> 

            </div>
            <div className='flex-1 p-5'>
                <h2 className='text-xl text-primary font-mono'>Appoinment</h2>
                <h2 className='text-4xl font-mono font-bold text-white'>Make An Appoinment Today</h2>
                <p className='font-mono font-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eveniet corporis dolorum quo soluta nihil illum sapiente natus, incidunt tenetur maiores et molestias ex. Provident aspernatur ad modi labore at?</p>
                <MyHoverButton>Get Appoinment</MyHoverButton>

            </div>
        </div>
    );
};

export default Appoinment;