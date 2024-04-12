import React from 'react'

function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>; // we can return in this way also if only 1 compoent is returing
 
}

export default Container