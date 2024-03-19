import React from 'react'
import Heading from '../Heading'
import {menu} from "../../../data/Data.jsx"
import MenuCard from './MenuCard.jsx'


const MenuSection = () => {
  return (
    <section>
        <div className=' container mx-auto mb-[7%]'>
            <Heading title='Our Popular Menu' subtitle="want to eat?"/>
            <div>
              <div className='mx-auto grid grid-cols-2 lg:grid-cols-4'>
                {menu.map((item, index)=> (
                  <MenuCard key={index} title={item.title} icon={item.icon} desc={item.desc} cover={item.cover}/>
                ))}
              </div>
            </div>
        </div>
    </section>
  )
}

export default MenuSection