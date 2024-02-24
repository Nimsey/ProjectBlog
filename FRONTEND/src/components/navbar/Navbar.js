import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import AuthLinks from '../authLinks/authLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Text Logo</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/">Home</Link>
                <Link href="/">Contact</Link>
                <AuthLinks />
            </div>
        </div>
    )
}

export default NavBar
