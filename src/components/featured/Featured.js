import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/dragon.jpg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Inkwell Novelty: more than just a blog</h1>
                    <p className={styles.postDesc}>
                    Welcome to Inkwell Insights, your quintessential haven where words flow as freely as thoughts in the mind of a dreamer. Crafted with love by an author passionate about the pulsating heart of the writing community, this blog is more than just a space—it's a vibrant gathering place for storytellers, dreamers, and literary enthusiasts alike. Here, creativity knows no bounds: from engaging contests that spark your competitive spirit to invaluable writing tips that polish your prose, every corner of Inkwell Insights is designed to inspire and elevate your writing journey.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Featured;