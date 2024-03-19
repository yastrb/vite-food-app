import React from 'react'

const Dishes = (props) => {
    return (
        <div className='bg-[#fff] rounded-xl p-8 flex flex-col justify-between'>
            <div>
                <img className=' p-5 mt-8' src={props.cover} alt={props.title} />
            </div>
            <div>
                <div className=' flex  justify-between gap-2 items-center'  >
                    <h4 className=' font-semibold my-2'>{props.title}</h4>
                    <div className=' flex justify-between gap-1'>
                        {props.rate.map((icon) => (
                            <span className=' text-[#e72a2a]'>{icon}</span>
                        ))}
                    </div>
                </div>
                <div className=' flex justify-between  items-end'>
                    <label htmlFor="" className=' text-[#e72a2a]'>PRICE $ {props.price}</label>
                    <button className=' bg-green rounded-lg py-3 px-4 hover:bg-orange transition-all'>
                        <i className=' fa-solid fa-plus'></i>
                    </button>
                </div>
            </div>



        </div>
    )
}

export default Dishes