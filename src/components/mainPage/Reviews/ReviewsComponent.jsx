import React, { useState } from 'react'
import cl from './Reviews.module.css'
import { useSelector } from 'react-redux'
export default function ReviewsComponent() {
    const [isReview, setIsReview] = useState(false)
    const [firstReview, secReview] = useSelector(state=>state['Reviews'].reviewsMain);
  return (
    <section className={cl.section}>
        <div className="container">
            <div className={cl.content}>
                <div className={cl.textsBlock}>
                    <p className={['top-title',cl.topTitle].join` `}>Reviews</p>
                    <h2 className={['title-comp', cl.title].join` `}>What People Think About Us</h2>
                    <div className={cl.circleBlock}>
                        <span className={cl.circle}></span>
                        <span className={cl.circle}></span>
                        <span className={cl.circle}></span>
                    </div>
                </div>
                <div className={cl.reviewsBlock}>
                    <div className={cl.reviews}>
                        <div className={!isReview ? [cl.reviewTop, cl.activeReview].join` ` : cl.reviewTop}>
                            <p className={cl.userReview}>{firstReview.userText}</p>
                            <div className={cl.reviewFooter}>
                               <img src={firstReview.imgHref} className={cl.userPic}/>
                               <p className={cl.initials}>{firstReview.initials}</p>
                            </div>
                          
                        </div>
                        <div className={isReview ? [cl.reviewBottom, cl.activeReview].join` ` : cl.reviewBottom}>
                            <p className={cl.userReview}>{secReview.userText}</p>
                            <div className={cl.reviewFooter}>
                               <img src={secReview.imgHref} className={cl.userPic}/>
                               <p className={cl.initials}>{secReview.initials}</p>
                            </div>
                        </div>
                    </div>
                    <div className={cl.switchBlock}>
                        <div className={cl.switcher}>
                            <div className={cl.switchTop} onClick={e=>setIsReview(false)}>
                                <span className={cl.topArrow}>
                                    <svg width="23px" height="23px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#999" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/></svg>
                                </span>
                            </div>
                            <div className={cl.switchBottom} onClick={e=>setIsReview(true)}>
                                <span className={cl.bottomArrow}>                    
                                    <svg width="23px" height="23px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#999" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/></svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
