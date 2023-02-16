import React from 'react'
import cl from './Destination.module.css'
import DestinationItem from './DestinationItem'

export default function DestinationComponent() {
  const stateDest = [{title: 'Test place',itemClass: '',linkItem:'/trips', href: '/img/dest-1.jpg', priceItem: '400', daysItem: '10'}, {title: 'Test place', href: '/img/dest-1.jpg',linkItem:'/trips', priceItem: '400', daysItem: '10', itemClass: cl.bottomItem}, {title: 'Test place', itemClass: '',linkItem:'/trips', href: '/img/dest-1.jpg', priceItem: '400', daysItem: '10'}]
  return (
    <div className={cl.section}>
      <div className="container">
        <p className={['top-title',cl.topTitle].join` `}>Top Destination</p>
        <h2 className={['title-comp',cl.title].join` `}>Discover the unforgettable places in Georgia</h2>
        <div className={cl.listBlockDest}>
          <ul className={cl.listDest}>
           {stateDest.map(e=>
              <DestinationItem itemClass={e.itemClass} linkItem={e.linkItem} hrefImg={e.href} titleItem={e.title} priceItem={e.priceItem} daysItem={e.daysItem}/>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
