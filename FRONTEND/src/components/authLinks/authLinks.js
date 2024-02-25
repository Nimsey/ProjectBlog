import React from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {
    const status = "authenticated"
    return (

        <div className={styles.container}>
            {status === "authenticated" ? <div className={styles.authlinks}><Link href="/create">Write</Link>  <Link href="/logout">Logout</Link> </div> : <Link href="/login">Login</Link>}
        </div>
    )
}

export default AuthLinks