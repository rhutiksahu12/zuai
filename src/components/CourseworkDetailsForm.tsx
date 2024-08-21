
'use client';

import { useState } from 'react';
import { useCourseworkStore } from '@/store/courseworkStore';

const courseworkTypes = ['Essay', 'Research Paper', 'Lab Report', 'Presentation'];
const subjects = ['English', 'Mathematics', 'Science', 'History', 'Art'];

export default function CourseworkDetailsForm({ file, onSubmit }: { file: File, onSubmit: () => void }) {
    const [title, setTitle] = useState('');
    const [type, setType] = useState(courseworkTypes[0]);
    const [subject, setSubject] = useState(subjects[0]);
    const addCoursework = useCourseworkStore((state) => state.addCoursework);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = (event) => {
            if (event.target && typeof event.target.result === 'string') {
                addCoursework({
                    title,
                    type,
                    subject,
                    fileData: event.target.result,
                    fileName: file.name,
                    fileType: file.type,
                });
                onSubmit();
            }
        };
        reader.readAsDataURL(file);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Essay Title
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </div>
            <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                    Coursework Type
                </label>
                <select
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                    {courseworkTypes.map((t) => (
                        <option key={t} value={t}>
                            {t}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                </label>
                <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                    {subjects.map((s) => (
                        <option key={s} value={s}>
                            {s}
                        </option>
                    ))}
                </select>
            </div>
            <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Upload Coursework
            </button>
        </form>
    );
}