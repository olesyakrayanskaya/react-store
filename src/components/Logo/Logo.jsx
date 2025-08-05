import React from 'react'
import styles from './Logo.module.css'
import LOGO from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'


function Logo() {
    return (
        <Link to={ROUTES.HOME}>
            <div className={styles.logo}>
                <img className={styles.logo__img} src={LOGO} alt="logo" />
            </div>
        </Link>
    )
}

export default Logo