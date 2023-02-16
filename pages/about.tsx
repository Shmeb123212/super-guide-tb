import Footer from '@/src/components/Footer/Footer'
import HeaderComponents from '@/src/components/Header/HeaderComponents'
import AboutText from '@/src/components/AboutPage/AboutText/AboutText';
import React from 'react'

export default function About() {
  return (
    <main>
        <HeaderComponents isMain={false}/>
        <AboutText/>
        <Footer/>
    </main>
  )
}
