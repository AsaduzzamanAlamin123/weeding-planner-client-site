import React from 'react';
import banner from '../../assest/picture/pexels-photo-758898.jpg';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';




const AppoinmentBanner = ({date , setDate}) => {
    return (
        <div class="hero min-h-screen bg-white">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img className='max-w-sm rounded-lg shadow-2xl' src={banner} alt="" />
        
          <div>
            <DayPicker 
              mode="single"
              selected={date}
              onSelect={setDate}
            
            />
             <p>You picked {format(date, 'PP')}</p>
            

           
          </div>
        </div>
      </div>
    );
};

export default AppoinmentBanner;