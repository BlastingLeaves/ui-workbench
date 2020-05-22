import React from 'react'


const CardImgRight =  ({ children, className}) => (
    <div className={'flex justify-end '}>
        <div className={`flex ${className}`}>
            {children}
        </div>
    </div>
);

export default CardImgRight