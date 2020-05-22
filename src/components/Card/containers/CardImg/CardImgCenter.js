import React from 'react'


const CardImgCenter =  ({ children, className}) => (
    <div className={'flex justify-center '}>
        <div className={`flex pb-2 ${className}`}>
            {children}
        </div>
    </div>
);

export default CardImgCenter