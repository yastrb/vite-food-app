import React from 'react'
import Hero from './hero/Hero'
import Discount from './discount/discount'

const Home = () => {
  return (
    <main className='mx-auto px-4 mt-[80px]'>
      <Hero/>
      <Discount/>
    </main>
  )
}

export default Home