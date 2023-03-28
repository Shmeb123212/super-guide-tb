import React from 'react'
import cl from './Destination.module.css'
import DestinationItem from './DestinationItem'
import { useSelector } from 'react-redux'

export default function DestinationComponent() {
  const stateTrips = useSelector(state=>state['Trips'].mainPage)
  return (
    <div className={cl.section}>
      <div className="container">
        <p className={['top-title',cl.topTitle].join` `}>Top Destination</p>
        <h2 className={['title-comp',cl.title].join` `}>Discover the unforgettable places in Georgia</h2>
        <div className={cl.listBlockDest}>
          <ul className={cl.listDest}>
           {stateTrips.map((e,i)=>
              <DestinationItem key={i} itemClass={e.id === 2 ? cl.bottomItem : ''} linkItem={'/trips'} hrefImg={e.img} titleItem={e.namePlace} priceCount={e.priceCounter} daysItem={e.days}/>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
