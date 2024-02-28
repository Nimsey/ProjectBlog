
'use client';
import React, { useState } from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
const getData = async () => {
    const res = await fetch(`http://localhost:3000/api/posts/topViews?desc=true`,
        {
            cache: "no-store",
        });

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};
const Menu = () => {
    const [posts, setPosts] = useState([]);
    // console.log('Received posts in Menu:', posts), // Log received posts
        React.useEffect(() => {
            getData().then(data => setPosts(data));
        }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            {/* {console.log('Rendering posts in Menu:', posts)} */}
            {posts?.map((post, index) => (
                <div key={index}>
                    <MenuPosts withImage={false} post={post} />
                    
                </div>
            ))}
        </div>
    );
};

export default Menu;