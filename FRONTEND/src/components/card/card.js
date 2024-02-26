import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="post" fill={true} className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                
                <div className={styles.detail}>
                <span className={styles.date}>date - </span>
                <span className={styles.category}>category</span>
                <Link href="/"><h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptas?</h2></Link>
                
                </div>
                
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea, quibusdam qui sed iste alias eum est veniam quas, doloremque quod molestiae numquam, eveniet magnam voluptate fuga ad enim voluptates.</p>

                <Link href="/" className={styles.link}>Read More</Link>
            </div>

        </div>
    )
}

export default Card