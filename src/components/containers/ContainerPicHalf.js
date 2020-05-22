import React from 'react'


const ContainerPicHalf =  ({ children, className}) => (
    <div className='lg:w-1/2'>
        <div className={`flex h-full w-full${className}`}>
            {children}
        </div>
    </div>
);

export default ContainerPicHalf