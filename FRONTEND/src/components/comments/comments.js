"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
};

const Comments = ({ postSlug }) => {
    const { data: session, status } = useSession();
    
    const [isEditing, setIsEditing] = useState(false);
    const [editCommentId, setEditCommentId] = useState(null);
    const [editDesc, setEditDesc] = useState('');


    const { data, mutate, isLoading } = useSWR(
        `http://localhost:3000/api/comments?postSlug=${postSlug}`,
        fetcher
    );

    const [desc, setDesc] = useState("");

    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ desc, postSlug }),
        });
        mutate();
    };

    const handleDelete = async (commentId) => {
        try {
            console.log('Attempting to delete comment with ID:', commentId); // Log the ID being used for deletion

            const response = await fetch(`/api/comments`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: commentId }), // Ensure this matches what your server expects
            });

            console.log('Delete request body:', JSON.stringify({ id: commentId })); // Log the body being sent

            if (!response.ok) {
                throw new Error(`Response is not OK`);
            }

            // After a successful delete, re-fetch the comments
            mutate(); // This will re-fetch the comments based on the key provided to useSWR

        } catch (error) {
            console.error('Failed to delete comment:', error);
        }
    };



    const handleEdit = (id, desc) => {
        setEditCommentId(id);
        setEditDesc(desc);
        setIsEditing(true);
    };

    const handleSubmitEdit = async () => {
        await fetch("/api/comments", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: editCommentId, desc: editDesc }),
        });
        mutate(); // Re-fetch comments to reflect the update
        setIsEditing(false); // Close the edit dialog
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea
                        placeholder="write a comment..."
                        className={styles.input}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <button className={styles.button} onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                {isLoading
                    ? "loading"
                    : data?.map((item, index) => (
                        <div className={styles.comment} key={index}>
                            <div className={styles.user}>
                                {item?.user?.image && (
                                    <Image
                                        src={item.user.image}
                                        alt=""
                                        width={50}
                                        height={50}
                                        className={styles.image}
                                    />
                                )}
                                <div className={styles.userInfo}>
                                    <span className={styles.username}>{item.user.name}</span>
                                    <span className={styles.date}>{item.createdAt}</span>
                                </div>
                            </div>
                            <p className={styles.desc}>{item.desc}</p>
                            {status === "authenticated" && session.user.email === item.userEmail && (
                                <>
                                    <button className={styles.CommentBtn} onClick={() => handleDelete(item.id)}>Delete</button>
                                    <button className={styles.CommentBtn} onClick={() => handleEdit(item.id, item.desc)}>Edit</button>
                                </>
                            )}
                            {isEditing && (
                                <div className={styles.editModal}> {/* You need to style this */}
                                    <textarea
                                        value={editDesc}
                                        onChange={(e) => setEditDesc(e.target.value)}
                                        className={styles.editInput} // Style as needed
                                    />
                                    <button onClick={handleSubmitEdit}>Submit</button>
                                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                                </div>
                            )}
                        </div>

                    ))}
            </div>
        </div>
    );
};

export default Comments;