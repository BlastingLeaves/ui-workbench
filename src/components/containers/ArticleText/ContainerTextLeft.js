import React from 'react'


const ContainerTextLeft =  ({ children, className}) => (
    <div className={` text-center lg:text-left mb-4 ${className}`}>
        {children}
    </div>

);

export default ContainerTextLeft