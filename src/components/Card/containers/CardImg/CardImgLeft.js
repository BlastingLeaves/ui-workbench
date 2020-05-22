import React from 'react'


const CardImgLeft =  ({ children, className}) => (
    <div className={'flex justify-start '}>
        <div className={`flex ${className}`}>
            {children}
        </div>
    </div>
);

export default CardImgLeft