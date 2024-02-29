import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";
import { PrismaClient } from '@prisma/client';

const Menuposts = ({ post = {}, withImage }) => {
    return (


        <div className={styles.items}>

            <Link key={post.id} href={`/posts/${post.slug}`} className={styles.item}>
                {withImage && post.img && (
                    <div className={styles.imageContainer}>
                        <Image src={post.img} alt="" className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles[post.cat.slug]}`}>
                        {post.cat && post.cat.title}
                    </span>
                    <h3 className={styles.postsTitle}>{post.title}</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>{post.user && post.user.name}</span>
                        <span className={styles.date}> - {new Date(post.createdAt).toLocaleDateString()}</span>
                        <p>Views: {post.views}</p> {/* Accessing views here */}
                    </div>
                </div>
            </Link>


        </div>
    );
};

export default Menuposts;
