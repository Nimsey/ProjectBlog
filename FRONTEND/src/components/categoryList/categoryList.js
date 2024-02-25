import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
            <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
                <Image src="/style.png" 
                alt="style" 
                width={32} 
                height={32}
                className={styles.image}
                />
                Meet Ups
            </Link>
            <Link href="/blog?cat=style" className={`${styles.category} ${styles.fashion}`}>
                <Image src="/style.png" 
                alt="style" 
                width={32} 
                height={32}
                className={styles.image}
                />
                Writing Tips
            </Link>
            <Link href="/blog?cat=style" className={`${styles.category} ${styles.food}`}>
                <Image src="/style.png" 
                alt="style" 
                width={32} 
                height={32}
                className={styles.image}
                />
                Book Reviews
            </Link>
            <Link href="/blog?cat=style" className={`${styles.category} ${styles.travel}`}>
                <Image src="/style.png" 
                alt="style" 
                width={32} 
                height={32}
                className={styles.image}
                />
                Book Updates
            </Link>
            <Link href="/blog?cat=style" className={`${styles.category} ${styles.culture}`}>
                <Image src="/style.png" 
                alt="style" 
                width={32} 
                height={32}
                className={styles.image}
                />
                Writing Prompts
            </Link>
            <Link href="/blog?cat=style" className={`${styles.category} ${styles.coding}`}>
                <Image src="/style.png" 
                alt="style" 
                width={32} 
                height={32}
                className={styles.image}
                />
                Writing Contests
            </Link>
            </div>
        </div>
    )
}

export default CategoryList
