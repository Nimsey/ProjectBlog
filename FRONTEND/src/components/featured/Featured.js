import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/dragon.jpg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Flash Fiction Fever: Enter Our 100-Word Story Contest</h1>
                    <p className={styles.postDesc}>
                    Flash fiction is a genre that demands brevity and depth, often leaving a lasting impact. This blog post announces our latest contest, challenging writers to tell a compelling story in just 100 words. Discover the rules, submission guidelines, and prizes for crafting a miniature masterpiece.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;