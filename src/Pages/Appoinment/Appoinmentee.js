
import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment';

const Appoinmentee = () => {
    const [date , setDate] = useState(new Date())
    return (
        <div>
             <AppoinmentBanner date={date} setDate ={setDate}></AppoinmentBanner>
             <AvailableAppoinment></AvailableAppoinment>
            
        </div>
    );
};

export default Appoinmentee;