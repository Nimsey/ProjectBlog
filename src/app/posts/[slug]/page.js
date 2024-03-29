import Menu from "@/components/menu/menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/comments";
import Link from 'next/link';

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await res.json();
    return data;
};

const SinglePage = async ({ params }) => {
    const { slug } = params;
    const data = await getData(slug);

    // Destructure the necessary properties from the `data` object
    const { title, user, createdAt, img, desc } = data;

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.user}>
                        {user?.image && (
                            <div className={styles.userImageContainer}>
                                <Image src={user.image} alt="" fill className={styles.avatar} />
                            </div>
                        )}
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{user?.name}</span>
                            <span className={styles.date}>{createdAt}</span>
                        </div>
                    </div>
                </div>
                {img && (
                    <div className={styles.imageContainer}>
                        <Image src={img} alt="" fill className={styles.image} />
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div
                        className={styles.description}
                        dangerouslySetInnerHTML={{ __html: desc }}
                    />
                    <div className={styles.comment}>
                        {/* <Link href={`/posts/${slug}/edit?title=${title}&user=${user.name}&createdAt=${createdAt}&img=${img}&desc=${desc}`}>
                            Edit
                        </Link> */}
                        {/* FRONTEND/src/app/api/posts/edit/[slug].js */}
                        <Comments postSlug={slug} />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default SinglePage;
