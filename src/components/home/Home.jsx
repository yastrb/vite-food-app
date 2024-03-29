import React from 'react'
import Discount from './discount/discount'
import Offer from './offer/Offer'
import MenuSection from './menu/Menu'
import Hero from './hero/Hero'
import Popular from './popular/Popular'

const Home = () => {
  return (
    <main className='mx-auto px-4 mt-[80px]'>
      <Hero />
      <MenuSection />
      <Offer />
      <Popular />
      <Discount/>
    </main>
  )
}

export default Home
