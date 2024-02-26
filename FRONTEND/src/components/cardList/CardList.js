import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/pagination'
import Image from 'next/image'
import Card from '../card/card'

const CardList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}><h1>Recent Posts</h1></div>
                <div className={styles.posts}>
                    <Card />
                    <Card />
                    <Card />
                </div>
            
            <Pagination />
        </div>
    )
}

export default CardList
