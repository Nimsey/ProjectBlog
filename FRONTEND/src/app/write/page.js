'use client';
import React from 'react'
import styles from './write.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react'
import dynamic from 'next/dynamic';

// const QuillNoSSRWrapper = dynamic(import('react-quill'), {
//     ssr: false,
//     loading: () => <p>Loading ...</p>,
// })

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
]


const WritePage = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = useState("");
    return (
        <div className={styles.container}>
            <h1>Title</h1>
            <ReactQuill
                modules={modules}
                formats={formats}
                theme="snow"
                value={value}
                onChange={setValue}
                placeholder="Tell your story..." />

            <button className={styles.publish}>
                Publish
            </button>
        </div>

    )
}

export default WritePage