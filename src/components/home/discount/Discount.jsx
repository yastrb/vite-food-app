import React from 'react'
import bg from "/image/offer_bg.jpg"
import Heading from '../Heading'


const Discount = () => {
  return (
    <section className=' mt-[7%] relative'>
        <div className=' absolute -z-10'>
            <img src={bg} alt="" />
        </div>
        <div className=' grid'>
            <Heading title='Special Kombo Pack' subtitle="WE MAKE THE BEST * BURGER IN YOUR TOWN"/>
        </div>
    </section>
  )
}

export default Discount