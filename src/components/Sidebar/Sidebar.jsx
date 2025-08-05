import React from 'react'
import styles from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Sidebar() {

  const { list } = useSelector(({ categories }) => categories);

  return (
    <section className={styles.sidebar}>
      <h2 className={styles.sidebar__title}>Categories</h2>
      <ul className={styles.sidebar__menu}>
        {list.map(({ id, name }) => (
          <li key={id} className={styles.sidebar__item}>
            <NavLink className={({ isActive }) =>
              `${styles.sidebar__link} ${isActive ? styles.sidebar__link_active : ''}`
            } to={`/categories/${id}`}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Sidebar