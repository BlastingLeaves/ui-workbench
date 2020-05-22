import React from 'react'

const Subtitle =  ({ children, className}) => (
  <div className={`mt-12 text-2xl lg:text-3xl xl:text-4xl font-bold leading-none uppercase
     ${className}`}
  >
    {children}
  </div>
)

export default Subtitle