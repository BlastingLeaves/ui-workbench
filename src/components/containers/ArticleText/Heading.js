import React from 'react'

const Heading =  ({ children, className}) => (
  <div className={`text-3xl lg:text-5xl font-semibold uppercase
     ${className}`}
  >
    {children}
  </div>
)

export default Heading