import React from 'react'

const Title =  ({ children, className}) => (
    <div className={`text-3xl lg:text-4xl xl:text-5xl font-bold leading-none uppercase
     ${className}`}
    >
      {children}
    </div>
)

export default Title