import React from 'react'
import cl from './Hero.module.css'
import Link from 'next/link'

export default function HeroComponents() {
  
  return (
    <section className={cl.hero}>
      <div className={cl.backgroundImg}></div>
        <div className={["container", cl.heroCont].join` `}>
          <div className={cl.content}>
            <h1 className={cl.title}>Make Your Holiday Memorable</h1>
            <p className={cl.descr}>Embark on an adventure and explore the beauty of our world with us.</p>
            <Link href={'/trips'}>
              <div  className={cl.link}>
                <span className={cl.mask}>
                  <div className={cl.linkContainer}>
                    <span className={cl.linkTitle1}>READ MORE</span>
                    <span className={cl.linkTitle2}>READ MORE</span>
                  </div>
                </span>
                <div className={cl.linkIcon}>
                  <svg className={cl.icon} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill='#fff' clip-rule="evenodd">
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                  </svg>
                  <svg className={cl.icon} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="#fff" clip-rule="evenodd">
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
    </section>
  )
}
