// EditPost.server.jsx
import React from 'react';
import ReactQuill from 'react-quill'; // Assuming ReactQuill can be server-side rendered
import 'react-quill/dist/quill.bubble.css';

const EditPost = ({ post }) => {
    // The form now is a simple presentational component without state or effects
    return (
        <form method="post" action={`/api/updatePost`}>
            <input type="hidden" name="id" value={post?._id} />
            <label>
                Title:
                <input type="text" name="title" defaultValue={post?.title || ''} />
            </label>
            <label>
                Category:
                <input type="text" name="category" defaultValue={post?.category || ''} />
            </label>
            <label>
                Description:
                {/* This assumes ReactQuill can work in this setup, which might not be true. 
                If not, consider using a textarea or another SSR-friendly rich text editor. */}
                <textarea name="description" defaultValue={post?.description || ''}></textarea>
            </label>
            <button type="submit">Update</button>
        </form>
    );
};

export default EditPost;
