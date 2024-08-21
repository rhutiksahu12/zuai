
'use client';

import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import CourseworkDetailsForm from './CourseworkDetailsForm'

export default function FileUpload() {
    const [file, setFile] = useState<File | null>(null)

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setFile(acceptedFiles[0])
        }
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'application/pdf': ['.pdf'] },
        maxSize: 25 * 1024 * 1024, // 25MB
    })

    const handleSubmit = () => {
        setFile(null)
    }

    return (
        <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Upload Coursework</h2>
            {!file && (
                <div
                    {...getRootProps()}
                    className={`border-2 border-dashed p-4 text-center ${isDragActive ? 'border-blue-500' : 'border-gray-300'
                        }`}
                >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the file here ...</p>
                    ) : (
                        <p>Drag and drop a file here, or click to select a file</p>
                    )}
                </div>
            )}
            {file && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">File Selected: {file.name}</h3>
                    <CourseworkDetailsForm file={file} onSubmit={handleSubmit} />
                </div>
            )}
            <p className="text-sm text-gray-500 mt-2">Limit 25 MB per file</p>
        </div>
    )
}