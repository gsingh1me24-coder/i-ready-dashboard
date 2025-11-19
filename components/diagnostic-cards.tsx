import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export function DiagnosticCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-gray-800 text-lg font-semibold">
            Diagnostic Status
          </CardTitle>
        </CardHeader>
        <CardContent className="h-20"></CardContent>
      </Card>

      <Link href="/diagnostic-results" className="block">
        <Card className="bg-gray-100 hover:bg-blue-50 transition-colors cursor-pointer h-full">
          <CardHeader>
            <CardTitle className="text-blue-500 text-lg font-semibold">
              Diagnostic Results
            </CardTitle>
          </CardHeader>
          <CardContent className="h-20"></CardContent>
        </Card>
      </Link>

      <Card className="bg-gray-100">
        <CardHeader>
          <CardTitle className="text-blue-500 text-lg font-semibold">
            Instruction
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <AlertCircle className="w-6 h-6 text-red-500" />
            <span className="text-gray-700 font-medium">6</span>
          </div>
          <div className="flex items-center gap-1">
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
            <span className="text-gray-700 font-medium">17</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-100">
        <CardHeader>
          <CardTitle className="text-blue-500 text-lg font-semibold">
            Standards Mastery
          </CardTitle>
        </CardHeader>
        <CardContent className="h-20"></CardContent>
      </Card>

      <Card className="bg-gray-100">
        <CardHeader>
          <CardTitle className="text-blue-500 text-lg font-semibold">
            Diagnostic Growth
          </CardTitle>
        </CardHeader>
        <CardContent className="h-20"></CardContent>
      </Card>
    </div>
  )
}
