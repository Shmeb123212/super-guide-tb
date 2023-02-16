import React from 'react'
import Footer from '@/src/components/Footer/Footer'
import HeaderComponents from '@/src/components/Header/HeaderComponents'
import ReviewsPage from '@/src/components/Reviews/ReviewsPage/ReviewsPage';

export default function Reviews() {
  return (
    <main>
      <HeaderComponents isMain={false}/>
      <ReviewsPage/>
      <Footer/>

    </main>
  )
}
