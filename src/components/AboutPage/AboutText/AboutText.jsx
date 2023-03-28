import React from 'react'
import cl from './AboutText.module.css'
import { useSelector } from 'react-redux'
import {replacerComments} from '@/src/untils/Replacer';

export default function AboutText() {

    const stateAbout = useSelector(state=>state['About'])

    return (
    <section  className={cl.section}>
        <div className="container">
            <p className={['top-title', cl.topTitle].join` `}>About Us</p>
            <h1 className={['title-comp', cl.title].join` `}>All about Super Guide</h1>
            <p className={cl.descr}>
                {replacerComments(stateAbout.pageText, '_', <br/>)}
            </p>
        </div>
    </section>
  )
}
