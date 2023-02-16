import React from 'react'
import cl from './TravelerPoint.module.css';
import Image from 'next/image';
const TravelerPoint = () => {
  return (
    <section className={cl.travelSection}>
        <div className="container">
            <div className={cl.content}>
                <div className={cl.imgsBlock}>
                    <img src={'/img/helpTrip-1.jpg'}  className={cl.hugeimg}/>
                    <img src={'/img/findTrip-2.jpg'} className={cl.tinyImg}/>
                </div>
                <div className={cl.textsBlock}>
                    <p className={['top-title',cl.topTitle].join` `}>Traveler Point</p>
                    <h2 className={['title-comp',cl.title].join` `}>We helping you find your dream vacation</h2>
                    <p className={cl.descr}>
                    The official website of Georgia's tourism board offers comprehensive information on destinations, activities, accommodations, and events in the state. From the stunning mountains to the charming towns, visitors can find everything they need to plan a perfect trip to Georgia.
                    </p>
                    <ul className={cl.countsList}>
                        <li className={cl.countsItem}>
                            <span className={cl.count}>25+</span>
                            <p className={cl.countDescr}>Holiday Package</p>
                        </li>
                        <li className={cl.countsItem}>
                            <span className={cl.count}>100+</span>
                            <p className={cl.countDescr}>Luxury Hotel</p>
                        </li>
                        <li className={cl.countsItem}>
                            <span className={cl.count}>50+</span>
                            <p className={cl.countDescr}>Memorable Trips</p>
                        </li>
                        <li className={cl.countsItem}>
                            <span className={cl.count}>1K+</span>
                            <p className={cl.countDescr}>Satisfied Traveler</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}


export default TravelerPoint