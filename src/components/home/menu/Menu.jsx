import React from 'react'
import Heading from '../Heading'

const MenuSection = () => {
  return (
    <section>
        <div className=' container'>
            <Heading title='Our Popular Menu' subtitle="want to eat?"/>
            <div>
              <div className=' grig grid-cols-2 lg:grid-cols-4'></div>
            </div>
        </div>
    </section>
  )
}

export default MenuSection