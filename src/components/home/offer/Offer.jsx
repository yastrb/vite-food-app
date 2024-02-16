import React from 'react'
import Heading from '../Heading'
import Button from '../../Button'

const Offer = () => {
  return (
    <section className=' mt-[7%]'>
        <div className=" flex flex-col md:flex-row">
            <div>
                <Heading title="Special Offer"  subtitle="GOOD FOOD, DRINKS & GREAT COMPANY."/>
                <p className=' text-gray leading-6'>As well known and we are very busy all days advice you. advice you to call us of before arriving, so we can guarantee your seat. advice you to call us of before arriving As well known and we are very busy all days advice you</p>
                <div className=' flex gap-5 my-8 items-center'>
                    <Button label="order now" color="[#00a850]"/>
                    <span className=' text-orange text-4xl font-bold' >$46.99 </span>
                </div>
            </div>
            <div>
              <img src="" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Offer 