import React from 'react'


const LongArticleBody =  ({ children, className}) => (
    <div className={`flex text-lg lg:text-xl mt-6 font-light mr-5 text-justify ${className}`}>
        {children}
    </div>

);

export default LongArticleBody