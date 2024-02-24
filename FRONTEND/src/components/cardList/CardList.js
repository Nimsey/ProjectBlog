import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/pagination'

const CardList = () => {
    return (
        <div className={styles.container}>Card List Posts
            <Pagination />
        </div>
    )
}

export default CardList
