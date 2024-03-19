import React from 'react'
<<<<<<< HEAD
import Discount from './discount/discount'

const Home = () => {
  return (
    <main className='mx-auto mt-[80px]'>

      <Discount/>
=======
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
>>>>>>> 65d6d1314558f7555354125899501c95879578b4
    </main>
  )
}

export default Home