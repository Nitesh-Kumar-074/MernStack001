import React from 'react'

function Button({
       children,
       bgColor = "black",
       ...props
}
) {
  return (
  <button {...props} className='text-white text-2xl m-2 p-2 rounded-lg' style={{backgroundColor:bgColor}}>{children}</button>
  )
}

export default Button