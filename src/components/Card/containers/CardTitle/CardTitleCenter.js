import React from 'react'


const CardTitleCenter =  ({ children, className}) => (
    <div className={'flex justify-center '}>
        <div className={`flex font-semibold text-l pt-2 ${className}`}>
            {children}
        </div>
    </div>
);

export default CardTitleCenter