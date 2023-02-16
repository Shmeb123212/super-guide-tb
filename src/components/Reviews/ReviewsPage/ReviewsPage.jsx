import React from 'react'
import cl from './ReviewsPage.module.css'
import { useSelector } from 'react-redux';
import ReviewsItem from './ReviewsItem';

export default function ReviewsPage() {
    
    const stateReviews = useSelector(state=>state['Reviews'].reviewsPage);

    return (
        <section className={cl.section}>
            <div className="container">
                <p className={['top-title', cl.topTitle].join` `}>Reviews</p>
                <h1 className={['title-comp', cl.title].join` `}>Testimonials from our visitors</h1>
                <div className={cl.listBlock}>
                    <ul className={cl.list}>
                        {stateReviews.map((e,i)=>{
                            return (
                                <ReviewsItem  initials={e.initials} imgHref={e.imgHref}  userReview={e.userText}/>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
  )
}
