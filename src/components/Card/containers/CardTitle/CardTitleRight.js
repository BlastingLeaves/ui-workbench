import React from 'react'


const CardTitleRight =  ({ children, className}) => (
    <div className={'flex justify-end '}>
        <div className={`flex font-semibold text-l pt-2 ${className}`}>
            {children}
        </div>
    </div>
);

export default CardTitleRight