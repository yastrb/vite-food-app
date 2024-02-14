import React from 'react'

const Heading = (props) => {
  return (
    <div className='py-8 text-center'>
        <h3 className=' title'>{props.title}</h3>
        <h4 className=' subtitle'>{props.subtitle}</h4>
    </div>
  )
}

export default Heading