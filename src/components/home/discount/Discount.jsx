import React from 'react'
import bg from "/image/offer_bg.jpg"
import Heading from '../Heading'
import Button from './../Button';


const Discount = () => {
    return (
        <section className=' mt-[7%] relative'>
            <div className=' absolute -z-10 h-[350px] md:h-full'>
                <img className=' w-full h-full object-cover ' src={bg} alt=""  />
            </div>
            <div className=' grid m-auto w-[80%]'>
                <div className=' pb-8'>
                    <div className='py-8 mt-8 text-left'>
                        <h3 className=' title'>Special Kombo Pack</h3>
                        <h4 className=' subtitle text-[#ffffff]'>WE MAKE THE BEST * BURGER IN YOUR TOWN</h4>
                    </div>
                    <p className=' text-gray my-8 md:w-[50%]'>
                        As well known and we are very busy all days advice you. 
                        advice you to call us of before arriving, so we can guarantee your seat. 
                        advice you to call us of before arriving 
                        As well known and we are very busy all days advice you</p>
                        <div className='hidden lg:flex gap-8 items-center'>
                            <Button label="Order Now" color="[#00A850]" />
                            <span className=' text-orange text-4xl font-semibold'>$46.99</span>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Discount