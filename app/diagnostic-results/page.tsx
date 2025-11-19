import { Header } from "@/components/header"
import { ResultsTable } from "@/components/results-table"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'
import Link from "next/link"

export default function DiagnosticResultsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:underline mb-4">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Diagnostic Results</h1>
        </div>
        <ResultsTable />
      </main>
    </div>
  )
}
