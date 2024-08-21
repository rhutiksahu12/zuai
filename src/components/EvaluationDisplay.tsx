'use client'
import { useState, useEffect } from 'react'

export default function EvaluationDisplay() {
    const [evaluation, setEvaluation] = useState({
        overallScore: 0,
        criteriaA: 0,
        criteriaB: 0,
        criteriaC: 0,
        date: new Date(),
    })

    useEffect(() => {
        // Simulating API call with dummy data
        setTimeout(() => {
            setEvaluation({
                overallScore: 85,
                criteriaA: 28,
                criteriaB: 30,
                criteriaC: 27,
                date: new Date(),
            })
        }, 1000)
    }, [])

    return (
        <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Evaluation Results</h2>
            <div className="bg-gray-100 p-4 rounded">
                <div className="flex items-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold">
                        {evaluation.overallScore}%
                    </div>
                    <div className="ml-4">
                        <p>Overall Score</p>
                        <p className="text-sm text-gray-500">
                            Evaluated on: {evaluation.date.toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Criteria Breakdown</h3>
                    <p>Criteria A: {evaluation.criteriaA}/30</p>
                    <p>Criteria B: {evaluation.criteriaB}/30</p>
                    <p>Criteria C: {evaluation.criteriaC}/30</p>
                </div>
            </div>
        </div>
    )
}