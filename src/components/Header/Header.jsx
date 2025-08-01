import React from 'react'
import styles from './Header.module.css'
import { ROUTES } from '../../utils/routes'
import { Link } from 'react-router-dom'
import LOGO from '../../assets/images/logo.svg'
import AVATAR from '../../assets/images/avatar.svg'
import SEARCH from '../../assets/images/search.svg'
import CART from '../../assets/images/cart.svg'
import FAVORITE from '../../assets/images/favorite.svg'

function Header() {
  return (
    <header className={styles.header}>
      <Link to={ROUTES.HOME}>
        <div className={`${styles.header__logo} ${styles.logo}`}>
          <img className={styles.logo__img} src={LOGO} alt="logo" />
        </div>
      </Link>
      <div className={styles.header__inner}>
        <form className={styles.header__form}>
          <div className={`${styles.header__search_wrapper}`}>
            <input className={styles.header__search}
              type="search"
              name="search"
              id="search"
              placeholder="search..."
              autoComplete="off"
              onChange={() => { }}
              value={""} />
            <img className={`${styles.header__search_icon}`} src={SEARCH} alt="search icon" />
            {false && <div className={`${styles.header__search_box}`}></div>}
          </div>
        </form>
        <div className={`${styles.header__account} ${styles.account}`}>
          <div className={styles.user}>
            <img className={styles.user__avatar} src={AVATAR} alt="user avatar" />
            <div className={styles.user__name}>user</div>
          </div>
          <Link to={ROUTES.HOME} className={styles.favorite}>
            <img className={styles.favorite__icon} src={FAVORITE} alt="favorite icon" />
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <img className={styles.cart__icon} src={CART} alt="cart icon" />
            <span className={styles.cart__count}>3</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header