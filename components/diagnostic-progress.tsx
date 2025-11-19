import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Flag, Briefcase, Network, MousePointer, FileText } from 'lucide-react'

export function DiagnosticProgress() {
  return (
    <Card className="bg-white">
      <CardContent className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Progress Stats */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              Diagnostic Progress
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {/* Not Started */}
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-400 mb-2">9</div>
                <div className="text-gray-600 font-medium">Not Started</div>
              </div>

              {/* In Progress */}
              <div className="text-center border-x border-gray-200">
                <div className="text-6xl font-bold text-gray-400 mb-2">0</div>
                <div className="text-gray-600 font-medium">In Progress</div>
              </div>

              {/* Completed */}
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-400 mb-2">353</div>
                <div className="text-gray-600 font-medium mb-4">Completed</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Flag className="w-4 h-4 text-red-500 fill-red-500" />
                    <span className="text-gray-700">7 Rushed</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Flag className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-700">8 Rushed</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="#"
                className="text-blue-500 hover:underline font-medium"
              >
                Monitor Student Status
              </a>
            </div>
          </div>

          {/* Right Section - Resources */}
          <div className="border-l border-gray-200 pl-8">
            <div className="space-y-6">
              {/* Teacher Toolbox */}
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Briefcase className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-blue-500 font-semibold text-lg mb-1">
                    Teacher Toolbox
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Instructional material and resources
                  </p>
                </div>
              </div>

              {/* Online Educator Learning */}
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Network className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-blue-500 font-semibold text-lg mb-1">
                    Online Educator Learning
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Self-paced Professional Learning courses
                  </p>
                </div>
              </div>

              {/* i-Ready Central */}
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MousePointer className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-blue-500 font-semibold text-lg mb-1">
                    i-Ready Central
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Tips, tools, and guidance to support use of i-Ready
                  </p>
                </div>
              </div>

              {/* Tools and Tips */}
              <div className="pt-4">
                <h3 className="text-gray-800 font-semibold text-lg mb-4">
                  Tools and Tips
                </h3>
                <a
                  href="#"
                  className="flex items-center gap-2 text-blue-500 hover:underline"
                >
                  <FileText className="w-5 h-5" />
                  Kit for Getting Good Data
                </a>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
