import React from 'react'
import styles from './Footer.module.css'
import TELEGRAM from '../../assets/images/telegram.svg'
import WHATSAPP from '../../assets/images/whatsapp.svg'
import Logo from '../Logo/Logo'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <span className={styles.footer__info}>Developed by <a className={styles.footer__link} href="http://" target="_blank" rel="noopener noreferrer">studio</a></span>
      <div className={styles.footer__socials}>
        <a className={styles.footer__social} href="http://" target="_blank" rel="noopener noreferrer">
          <img className={styles.footer__icon} src={TELEGRAM} alt="telegran icon" /></a>
        <a className={styles.footer__social} href="http://" target="_blank" rel="noopener noreferrer">
          <img className={styles.footer__icon} src={WHATSAPP} alt="whatsapp icon" /></a>
      </div>
    </footer>
  )
}

export default Footer