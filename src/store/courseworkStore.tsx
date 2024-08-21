// src/store/courseworkStore.ts

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Coursework {
    id: string
    title: string
    type: string
    subject: string
    fileData: string
    fileName: string
    fileType: string
}

interface CourseworkStore {
    courseworks: Coursework[]
    addCoursework: (coursework: Omit<Coursework, 'id'>) => void
    getCourseworks: () => Coursework[]
    deleteCoursework: (id: string) => void
}

export const useCourseworkStore = create<CourseworkStore>()(
    persist(
        (set, get) => ({
            courseworks: [],
            addCoursework: (coursework) =>
                set((state) => ({
                    courseworks: [...state.courseworks, { ...coursework, id: Date.now().toString() }],
                })),
            getCourseworks: () => get().courseworks,
            deleteCoursework: (id) =>
                set((state) => ({
                    courseworks: state.courseworks.filter((coursework) => coursework.id !== id),
                })),
        }),
        {
            name: 'coursework-storage',
        }
    )
)