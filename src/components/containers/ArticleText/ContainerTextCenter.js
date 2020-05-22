import React from 'react'


const ContainerTextCenter =  ({ children, className}) => (
    <div className={` text-center lg:text-center mb-4 ${className}`}>
        {children}
    </div>

);

export default ContainerTextCenter