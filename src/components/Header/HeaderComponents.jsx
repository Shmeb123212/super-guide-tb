import React, { useEffect, useMemo, useRef, useState } from 'react'
import cl from './Header.module.css'
import Link from 'next/link'

export default function HeaderComponents({isMain}) {
  const headerRef = useRef('');
  const blurRef = useRef('');

  useEffect(()=>{
    isMain && window.addEventListener('scroll', () => {
      if(headerRef.current !== null) {
        headerRef.current.style.setProperty('--scroll',window.pageYOffset / 200);

        blurRef.current.style.setProperty('--scroll',window.pageYOffset / 200);
 
       if( headerRef.current.classList.contains(cl.active) && window.pageYOffset <= 199) {
         headerRef !== null && headerRef.current.classList.remove(cl.active)
       } else if ( !headerRef.current.classList.contains(cl.active) && window.pageYOffset >= 199) {
         headerRef !== null && headerRef.current.classList.add(cl.active)
       }
       if( headerRef.current.classList.contains(cl.activeWhite) && window.pageYOffset <= 650) {
         headerRef !== null && headerRef.current.classList.remove(cl.activeWhite)
       } else if ( !headerRef.current.classList.contains(cl.activeWhite) && window.pageYOffset >= 650) {
         headerRef !== null && headerRef.current.classList.add(cl.activeWhite)
       }
      }  
      
    }, false);
  },[])


  return (
    <header ref={headerRef} className={isMain ? cl.header: [, cl.active, cl.pages].join` `}>
      <div ref={blurRef} className={cl.blur}></div>
      <div className={cl.wrapper}>
      <span className={cl.blur}></span>
        <div className={["container", cl.container].join` `}>
          <Link href={'/'}>
            <div className={cl.logoBlock}>
                <span className={cl.logoImg}></span>
                <span className={cl.logo}>Super Guide</span>
            </div>
          </Link>
          <div className={cl.headInfo}>
            <div className={cl.navBlock}>
              <nav className={cl.nav}>
                <ul className={cl.navList}>
                  <Link href={'/trips'}>
                    <li className={cl.navItem}>
                      Trips
                    </li>
                  </Link>
                  <Link href={'/reviews'}>
                    <li className={cl.navItem}>
                      Reviews
                    </li>
                  </Link> 
                  <Link href={'/about'}>
                    <li className={cl.navItem}>
                      About Us
                    </li>
                  </Link>
                </ul>
              </nav>
            </div>
            <div className={cl.socialBlock}>
              <a href="https://www.instagram.com/tbilisi_supergid/" target='_blank' rel='noreferrer' className={cl.inst}>
                
              <span className={cl.socialLogo}></span>

              </a>
            </div>
          </div>
         
        </div>
      </div>  

    </header>
  )
}
