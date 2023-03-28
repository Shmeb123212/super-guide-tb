import Footer from '@/src/components/Footer/Footer'
import HeaderComponents from '@/src/components/Header/HeaderComponents'
import React, {useState} from 'react'
import TripPageComp from '@/src/components/TripsPage/TripsList/TripPageComp'
import MyModal from '@/src/components/UI/MyModal/MyModal'
export default function Trips() {
  const [isModal, setIsModal] = useState(false)

  return (
     <main>
        <MyModal isModal={isModal} setIsModal={setIsModal}/>
        <HeaderComponents isMain={false}/>
        <TripPageComp isModal={isModal} setIsModal={setIsModal}/>
        <Footer/>
    </main>
  )
}
