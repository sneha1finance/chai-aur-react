import React from 'react'

function Button({children,
    type = "button",
    bgColor='bg-blue-600',
    textColor = 'text-white',
    className='', // when we use className in props => by feault we nwwd to keep it blank " "
    ...props // if user addd more value then it goes inside ...props

}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>{children}</button>
  )
}

export default Button