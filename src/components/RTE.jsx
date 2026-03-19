import React from 'react'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'; // Import the default styling
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "" }) {

    // Quill editor modules for toolbar customization
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
        ],
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet',
        'link', 'image'
    ];

    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1 text-gray-700 font-medium'>{label}</label>}

            <div className="bg-white rounded-lg">
                <Controller
                    name={name || "content"}
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <ReactQuill
                            theme="snow"
                            value={value || defaultValue}
                            onChange={onChange}
                            modules={modules}
                            formats={formats}
                            className="min-h-[300px]"
                            placeholder="Write your story here..."
                        />
                    )}
                />
            </div>
        </div>
    )
}
