import React from 'react'


const ContainerTextRight =  ({ children, className}) => (
    <div className={` text-center lg:text-right mb-4 ${className}`}>
        {children}
    </div>

);

export default ContainerTextRight