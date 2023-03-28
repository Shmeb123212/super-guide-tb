import React from 'react'
import cl from './TripPageComp.module.css'

export default function TripPageItem({idItem,setActiveTariff,hrefImg, titleItem, priceCount, daysItem, itemClass, setIsModal ,isModal}) {
    return (
        <li className={[cl.itemDest, itemClass].join` `} onClick={e=>{setIsModal(!isModal);setActiveTariff(idItem);}}>
            <div className={cl.imgBlock}>
                <img src={hrefImg} alt="" className={cl.img} />
                <span className={cl.imgRec}>Recommended</span>
            </div>
            <h3 className={cl.titleDest}>{titleItem}</h3>
            <div className={cl.bottomBlock}>
                <span className={cl.price}>${priceCount*(+(daysItem))}</span>
                <div className={cl.days}>
                    <span className={cl.local}></span>
                    {`${daysItem} Days Trip`}
                </div>
            </div>
        </li>
    )
}
