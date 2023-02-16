import React from 'react'
import cl from './ReviewsPage.module.css';

export default function ReviewsItem({ imgHref, initials, userReview}) {
  return (
    <li className={cl.itemReview}>
        <p className={cl.itemText}>
            {userReview}
        </p>
        <div className={cl.footerItem}>
            <img src={imgHref} alt="" className={cl.imgItem}/>
            <span className={cl.initialsItem}>{initials}</span>
        </div>
    </li>
  )
}
