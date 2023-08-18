import DashboardNav from '@/pages/layout/navbar/DashboardNav';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
const Quill = dynamic(import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'; // Import the default styles

function Index() {

    const [editorHtml, setEditorHtml] = useState('');
    const modules = {
        toolbar: [


            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'align': [] }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript

            [{ 'image': true }],


            ['clean']                                         // remove formatting button
        ],
    }
    console.log(editorHtml)
    const handleEditorChange = (content) => {
        setEditorHtml(content);
    };

    return (
        <div className='container mx-auto'>
            <Quill
                modules={modules}
                value={editorHtml}
                onChange={handleEditorChange}

            />
        </div>
    );
}

export default Index;
Index.getLayout = (page) => {
    return <DashboardNav>
        {page}
    </DashboardNav>
}