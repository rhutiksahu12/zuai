
import dynamic from 'next/dynamic'

const FileUpload = dynamic(() => import('@/components/FileUpload'), { ssr: false })
const CourseworkList = dynamic(() => import('@/components/CourseworkList'), { ssr: false })
const EvaluationDisplay = dynamic(() => import('@/components/EvaluationDisplay'), { ssr: false })
const ExploreCoursework = dynamic(() => import('@/components/ExploreCoursework'), { ssr: false })

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">IB Coursework Evaluator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <FileUpload />
          <CourseworkList />
        </div>
        <div>
          <EvaluationDisplay />
          <ExploreCoursework />
        </div>
      </div>
    </main>
  )
}