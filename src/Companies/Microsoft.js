import React from 'react';
import List from '../Components/List';
import { microsoftData } from '../Data/MicrosoftData';

const Microsoft = () => {

    return (
        <div className='w-full sm:w-9/12  mx-auto p-5 h-90b overflow-x-scroll'>
            <p className='font-extrabold text-4xl my-3'>Microsoft</p>
            <div>
                {microsoftData.map((problem, index) => (
                    <List key={index} {...problem} />
                ))}
            </div>
        </div>
    )
}

export default Microsoft
