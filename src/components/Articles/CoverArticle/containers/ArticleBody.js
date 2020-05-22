import React from 'react'


const ArticleBody =  ({ children, className}) => (
    <div className={`text-xl lg:text-2xl mt-6 font-light mr-5 text-justify ${className}`}>
        {children}
    </div>

);

export default ArticleBody