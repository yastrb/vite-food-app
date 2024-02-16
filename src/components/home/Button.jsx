import React from 'react'

const Button = (props) => {
    const btnClass= ` bg-${props.color} ${props.translate} px-8 py-4 rounded-xl text-[#FFFFFF] text-sm font-semibold uppercase w-[164px]`
  return (
    <button className={btnClass} >{props.label}</button>
  )
}

export default Button