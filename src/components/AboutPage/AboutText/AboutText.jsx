import React from 'react'
import cl from './AboutText.module.css'
import { useSelector } from 'react-redux'

export default function AboutText() {

    const stateAbout = useSelector(state=>state['About'])

    return (
    <section  className={cl.section}>
        <div className="container">
            <p className={['top-title', cl.topTitle].join` `}>About Us</p>
            <h1 className={['title-comp', cl.title].join` `}>All about Super Guide</h1>
            <p className={cl.descr}>
                {stateAbout.pageText}
            </p>
        </div>
    </section>
  )
}
