import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Menu = () => {
    return (
        <div className={styles.container}>
            <h4>{"What's hot"}</h4>
            <h1 className={styles.title}>Most Popular</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill={true} className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                        <h2 className={styles.postTitle}>adipisicing elit. Dicta, voluptas?</h2>
                        <div className={styles.detail}>
                            <span className={styles.date}>date - </span>
                            <span className={styles.username}>user name</span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill={true} className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                        <h2 className={styles.postTitle}>adipisicing elit. Dicta, voluptas?</h2>
                        <div className={styles.detail}>
                            <span className={styles.date}>date - </span>
                            <span className={styles.username}>user name</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Menu
