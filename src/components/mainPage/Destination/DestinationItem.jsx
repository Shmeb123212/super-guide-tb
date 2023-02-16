import React from 'react'
import cl from './Destination.module.css'
import Link from 'next/link'


export default function DestinationItem({hrefImg = '#',linkItem, titleItem, priceItem, daysItem, itemClass}) {
  return (
    <Link href={linkItem}>
        <li className={[cl.itemDest, itemClass].join` `}>
            <div className={cl.imgBlock}>
                <img src={hrefImg} alt="" className={cl.img} />
                <span className={cl.imgRec}>Recommended</span>
            </div>
            <h3 className={cl.titleDest}>{titleItem}</h3>
            <div className={cl.bottomBlock}>
                <span className={cl.price}>${priceItem}</span>
                <div className={cl.days}>
                    <span className={cl.local}></span>
                    {`${daysItem} Days Trip`}
                </div>
            </div>
        </li>
    </Link>
  )
}
