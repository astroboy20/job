
import { Header } from '@/components/header'
import React from 'react'
import { HeroSection } from './hero-section'

const HomeContainer = () => {
  return (
    <div className='py-[3%] px-[6%]'>
        <Header/>
        <HeroSection/>
    </div>
  )
}

export  {HomeContainer}