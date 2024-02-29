import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <h1 className={styles.logoText}>Inkwell Novelty: since 2024</h1>
                </div>
                <p className={styles.desc}>
                
                </p>
            </div>
        </div>
    );
};

export default Footer;