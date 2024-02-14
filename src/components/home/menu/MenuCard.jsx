import React from 'react'

const MenuCard = (props) => {
  return (
    <div className=' flex flex-col bg-white group hover:bg-orange cursor-pointer transition-all px-10 py-8 border-r-2 border-[#f2f2f2]'>
      <img src={props.icon} alt="" />
        <h5 className=' text-xl font-medium group-hover:text-[#f2f2f2]'>{props.title}</h5>
        <p>{props.desc}</p>
        <div>
          <img src={props.cover} alt="" />
        </div>
    </div>
  )
}

export default MenuCard