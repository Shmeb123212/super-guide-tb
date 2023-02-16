import React from 'react'
import cl from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={cl.footer}>
        <div className="container">
            <div className={cl.content}>
                <div className={cl.logoBlock}>
                    <span className={cl.logoImg}></span>
                </div>
                <p className={cl.authDescr}>© 2023 Super Guide</p>
            </div>
        </div>
    </footer>
  )
}
