import React,{useId} from 'react'

function Input({
       label,
       type = "text",
       ...props
},ref) {
       const id = useId()
  return (
    <div>
       {label && <label className='text-white text-2xl' htmlFor={id}>Enter your name here </label>}
       <input type={type} ref={ref} className='m-4 p-4' {...props}></input>
    </div>
  )
}

export default React.forwardRef(Input)