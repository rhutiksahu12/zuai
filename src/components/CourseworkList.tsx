// src/components/CourseworkList.tsx

'use client';

import { useEffect } from 'react';
import { useCourseworkStore } from '@/store/courseworkStore'
import { Trash2 } from 'lucide-react'

export default function CourseworkList() {
    const courseworks = useCourseworkStore((state) => state.courseworks)
    const getCourseworks = useCourseworkStore((state) => state.getCourseworks)
    const deleteCoursework = useCourseworkStore((state) => state.deleteCoursework)

    useEffect(() => {
        getCourseworks()
    }, [getCourseworks])

    const recentCourseworks = courseworks.slice(-2).reverse()

    return (
        <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Recent Coursework</h2>
            {recentCourseworks.length === 0 ? (
                <p>No coursework uploaded yet.</p>
            ) : (
                <ul className="space-y-4">
                    {recentCourseworks.map((coursework) => (
                        <li key={coursework.id} className="bg-white p-4 rounded-lg shadow-md relative">
                            <h3 className="font-semibold text-lg mb-2">{coursework.title}</h3>
                            <p className="text-sm text-gray-600">Type: {coursework.type}</p>
                            <p className="text-sm text-gray-600">Subject: {coursework.subject}</p>
                            <p className="text-sm text-gray-600">File: {coursework.fileName}</p>
                            <button
                                onClick={() => deleteCoursework(coursework.id)}
                                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                            >
                                <Trash2 size={18} />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}