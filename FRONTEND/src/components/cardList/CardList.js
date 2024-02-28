'use client';
import React, { useEffect, useState } from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/pagination";
import Image from "next/image";
import Card from "../card/card";

const getData = async (page, cat) => {
    const res = await fetch(
        `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};

const CardList = ({ page, cat }) => {
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData(page, cat);
            setPosts(data.posts);
            setCount(data.count);
        };

        fetchData();
    }, [page, cat]);

    const POST_PER_PAGE = 2;

    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                {posts?.map((item, index) => (
                    <Card item={item} key={index} />
                ))}
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
    );
};

export default CardList;