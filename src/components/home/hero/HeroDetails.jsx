import React from 'react';
import { hero } from "../../../data/Data.jsx"

const HeroDetails = () => {
    return (
        <>
            <div className=' grid gap-8 details relative'>
                {hero.map((item, index) => (
                    <div className=' grid grid-rows-2 grid-flow-col gap-5' key={index}>
                        <h3 className=' grid font-bold text-right text-lg  '>{item.title}</h3>
                        <p className=' grid text-right text-gray  text-base '>{item.desc}</p>
                        <div className='grid items-center justify-center  row-span-2'>
                            <div className='grid items-center justify-center w-[55px] h-[55px] bg-white rounded-full'>{item.id}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default HeroDetails