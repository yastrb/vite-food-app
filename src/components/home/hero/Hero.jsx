import React from 'react'
import Button from '../Button'

const Hero = () => {
  return (
    <section className=''>
        <div className=' container'>
            <div className=' grid grid-cols-3'>
                <div className=' grid gap-5'>
                    <h2 className=' font-satisfy text-orange text-2xl'>Medium 2-topping Burger</h2>
                    <h1 className=' text-7xl font-black'>ARE YOU HUNGRY?</h1>
                    <p className=' text-gray text-base'>As well known and we are very busy all days advice you. advice you to call us of before arriving.</p>
                    <div className=' grid'>
                        <Button color="orange" label="learn more"/>
                        <Button translate='translate-x-6' color="green" label="see our menu"/>
                    </div>
                </div>
                <div>image</div>
                <div>information</div>
            </div>
            <div>socials</div>
        </div>
    </section>
  )
}

export default Hero