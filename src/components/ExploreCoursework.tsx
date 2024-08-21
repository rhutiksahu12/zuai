
'use client';

import { useState } from 'react'
import { useCourseworkStore } from '@/store/courseworkStore'
import { Trash2 } from 'lucide-react'

const categories = ['All', 'Essay', 'Research Paper', 'Lab Report', 'Presentation']

export default function ExploreCoursework() {
    const [activeCategory, setActiveCategory] = useState(categories[0])
    const courseworks = useCourseworkStore((state) => state.courseworks)
    const deleteCoursework = useCourseworkStore((state) => state.deleteCoursework)

    const filteredCourseworks = activeCategory === 'All'
        ? courseworks
        : courseworks.filter((coursework) => coursework.type === activeCategory)

    return (
        <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Explore Coursework</h2>
            <div className="mb-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`mr-2 px-3 py-1 rounded ${activeCategory === category
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCourseworks.map((coursework) => (
                    <div key={coursework.id} className="bg-white p-4 rounded-lg shadow-md relative">
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
                    </div>
                ))}
            </div>
        </div>
    )
}