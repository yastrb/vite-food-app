import React from 'react'
import MenuSection from './menu/Menu'
import Hero from './hero/Hero'

const Home = () => {
  return (
    <main className=' mx-auto px-4 mt-[80px]'>
      <Hero/>
      <MenuSection/>
    </main>
  )
}

export default Home