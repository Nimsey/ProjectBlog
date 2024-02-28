//FRONTEND/src/app/posts/edit/[slug].js
//FRONTEND/src/app/posts/[slug]/page.js
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'; // Assuming ReactQuill can be server-side rendered

export default function EditPost({ post }) {
    // Render the form with the post data
    return (
        <form method="post">
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
                {/* Replace ReactQuill with a textarea or a server-side renderable component if necessary */}
                <textarea name="description" defaultValue={post?.description || ''}></textarea>
            </label>
            <button type="submit">Update</button>
        </form>
    );
}
export async function loader({ params }) {
    const { slug } = params;
    // Fetch the post data based on the slug
    const post = await fetchPostData(slug); // Implement this function to fetch post data
    return { post };
}

// Continue in app/routes/posts/edit/[slug].js

export async function action({ request, params }) {
    const formData = await request.formData();
    const post = Object.fromEntries(formData);
    const { slug } = params;

    // Update the post in your database
    try {
        await updatePostById(slug, post); // Implement this function to update your post
        return redirect(`/posts/${slug}`); // Redirect to the updated post
    } catch (error) {
        // Handle the error (e.g., by returning an error message to display in the form)
        throw new Error('Failed to update post');
    }
}
