import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={`container ${styles['custom-container']}`}>
        {children}
      </div>
    </>
  )
}

export default Layout
