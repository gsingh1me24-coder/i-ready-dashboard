import { Search, ChevronDown, ArrowUpDown, Flag } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const students = [
  { id: 1, name: "Student, UX", grade: "Grade 2 (433)", domains: ["Grade 2", "Grade 4", "Grade 2", "Grade 3"], growth: { typical: 15, stretch: 35 }, alert: true },
  { id: 2, name: "Student, UX", grade: "Grade 2 (433)", domains: ["Grade 2", "Grade 4", "Grade 2", "Grade 3"], growth: { typical: 15, stretch: 35 }, alert: true },
  { id: 3, name: "Student, UX", grade: "Grade 2 (433)", domains: ["Grade 2", "Grade 4", "Grade 2", "Grade 3"], growth: { typical: 15, stretch: 35 }, alert: true },
  { id: 4, name: "Student, UX", grade: "Grade 2 (433)", domains: ["Grade 2", "Grade 4", "Grade 2", "Grade 3"], growth: { typical: 15, stretch: 35 }, alert: true },
  { id: 5, name: "Student, UX", grade: "Grade 2 (433)", domains: ["Grade 2", "Grade 4", "Grade 2", "Grade 3"], growth: { typical: 15, stretch: 35 }, alert: true },
  { id: 6, name: "Student, UX", grade: "Grade 2 (433)", domains: ["Grade 2", "Grade 4", "Grade 2", "Grade 3"], growth: { typical: 15, stretch: 35 }, alert: true },
  { id: 7, name: "Student, UX", grade: "Grade 2 (433)", domains: ["Grade 2", "Grade 4", "Grade 2", "Grade 3"], growth: { typical: 15, stretch: 35 }, alert: true },
  { id: 8, name: "Student, UX", grade: "Grade 2 (433)", domains: ["Grade 2", "Grade 4", "Grade 2", "Grade 3"], growth: { typical: 15, stretch: 35 }, alert: true },
]

export function ResultsTable() {
  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
      {/* Table Controls */}
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Student" className="pl-9 bg-white" />
        </div>
        <Select defaultValue="overall">
          <SelectTrigger className="w-[200px] bg-white">
            <SelectValue placeholder="Select View" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="overall">Overall Placement & Scale Score</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-[250px_180px_1fr_200px] border-b bg-gray-50 text-sm text-gray-600">
        <div className="p-4 font-medium"></div>
        <div className="p-4 font-medium border-l"></div>
        <div className="border-l">
          <div className="p-2 text-center border-b bg-gray-100">Placement by Domain</div>
          <div className="grid grid-cols-4">
            {["NO", "ALG", "MS", "GEO"].map((domain) => (
              <div key={domain} className="p-2 text-center border-r last:border-r-0 flex items-center justify-center gap-1 cursor-pointer hover:bg-gray-100">
                {domain} <ArrowUpDown className="h-3 w-3" />
              </div>
            ))}
          </div>
        </div>
        <div className="border-l">
          <div className="p-2 text-center border-b bg-white">
            <Select defaultValue="annual">
              <SelectTrigger className="h-7 border-0 bg-transparent text-xs font-medium">
                <SelectValue placeholder="Annual Growth Measures" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="annual">Annual Growth Measures</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2">
            <div className="p-2 text-center border-r text-xs flex items-center justify-center gap-1">
              Typical Growth <ArrowUpDown className="h-3 w-3" />
            </div>
            <div className="p-2 text-center text-xs flex items-center justify-center gap-1">
              Stretch Growth® <ArrowUpDown className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Table Body */}
      <div className="divide-y">
        {students.map((student) => (
          <div key={student.id} className="grid grid-cols-[250px_180px_1fr_200px] hover:bg-gray-50">
            <div className="p-4 flex items-center text-blue-600 font-medium cursor-pointer hover:underline">
              {student.name}
            </div>
            <div className="p-4 border-l flex items-start gap-2">
              <div className="mt-1">
                <div className="h-4 w-4 rounded-full bg-red-500/20 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                </div>
              </div>
              <div>
                <div className="text-gray-900">{student.grade}</div>
                {student.alert && (
                  <Flag className="h-4 w-4 text-red-400 mt-1 fill-red-400" />
                )}
              </div>
            </div>
            <div className="border-l grid grid-cols-4">
              {student.domains.map((domain, i) => (
                <div 
                  key={i} 
                  className="p-4 border-r last:border-r-0 flex items-center justify-center text-gray-600 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,#fee2e2_5px,#fee2e2_10px)]"
                >
                  {domain}
                </div>
              ))}
            </div>
            <div className="border-l grid grid-cols-2">
              <div className="p-4 border-r flex items-center justify-center text-gray-900">
                {student.growth.typical}
              </div>
              <div className="p-4 flex items-center justify-center text-gray-900">
                {student.growth.stretch}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
