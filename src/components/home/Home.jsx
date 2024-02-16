import React from 'react'
import Hero from './hero/Hero'
import Popular from './popular/Popular'

const Home = () => {
  return (
    <main className='mx-auto px-4 mt-[80px]'>
      <Hero/>
      <Popular/>
    </main>
  )
}

export default Home