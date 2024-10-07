
import { Header } from '@/components/header'
import React from 'react'
import { HeroSection } from './hero-section'
import HowItWorks from './how-it-works'
import { Proof } from './proof'
import { Footer } from '@/components/footer'
const HomeContainer = () => {
  return (
    <div className='py-[3%] px-[6%]'>
        <Header/>
        <HeroSection/>
        <HowItWorks/>
        <Proof/>
        <Footer/>
    </div>
  )
}

export  {HomeContainer}