import React from 'react'
import Heading from './../Heading';
// import Button from './../Button';
import {dishes} from '../../../data/Data.jsx'
import Dishes from './Dishes';

const Popular = () => {
  return (
    <section className=' mt-[7%] lg:w-[80%] m-auto'>
        <Heading title="Popular dishes" subtitle="POPULAR DISHES"/>
        {/* buttons */}
        <div className=' flex flex-wrap '>
            {/* <Button color="orange" label="ALL"/> */}
          <button>All</button>
        </div>
        {/* dishes */}
        <div className=' grid gap-8 grid-cols-2 lg:grid-cols-3'>
          {dishes.map((item)=> (
            <Dishes key={item.id}
            id={item.id}
            title={item.title}
            alt={item.title}
            category={item.category}
            subcategory={item.sub}
            cover={item.cover}
            price={item.price}
            rate={item.rate}
            />
          ))}
        </div>
    </section>
  )
}

export default Popular