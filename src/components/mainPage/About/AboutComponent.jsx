import React from 'react'
import cl from './About.module.css'
import Link from 'next/link'

export default function AboutComponent() {
  return (
    <div className={cl.section}>
        <div className={["container", cl.cont].join` `}>
            <p className={['top-title', cl.topTitle].join` `}>About Us</p>
            <h2 className={['title-comp', cl.title].join` `}>Welcome to our travel company</h2>
            <p className={cl.descr}>Super Guide specializing in tours to Georgia, where you can experience the breathtaking beauty of the Caucasus Mountains and the stunning natural landscapes of this beautiful country. Our expert guides will take you on unforgettable journeys to explore the rugged terrain of the region, with its vast green valleys, crystal-clear lakes, and snow-capped peaks. Discover the pristine nature of Georgia as you hike through the lush forests, explore the enchanting waterfalls, and spot unique wildlife. Whether you are a thrill-seeker or a nature lover, our tours are tailored to meet your specific needs and desires. Come and discover the hidden gems of Georgia with us!<Link href={'/about'}><span>Read more...</span></Link></p>
        </div>
    </div>
  )
}
