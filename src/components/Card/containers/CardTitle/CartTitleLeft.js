import React from 'react'


const CardTitleLeft =  ({ children, className}) => (
    <div className={'flex justify-start '}>
        <div className={`font-semibold text-l pt-2 ${className}`}>
            {children}
        </div>
    </div>
);

export default CardTitleLeft