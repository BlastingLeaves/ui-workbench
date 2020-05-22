import React from 'react'


const CardTextLeft =  ({ children, className}) => (
        <div className={`flex mt-4 mb-4 text-right  ${className}`}>
            {children}
        </div>

);

export default CardTextLeft