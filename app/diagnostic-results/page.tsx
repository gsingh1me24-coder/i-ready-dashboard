import { Header } from "@/components/header"
import { ResultsTable } from "@/components/results-table"
import { Button } from "@/components/ui/button"
import { Printer, Download, ChevronDown, HelpCircle } from "lucide-react"

export default function DiagnosticResultsPage() {
  // Custom patterns for the charts
  const greenStripe = {
    backgroundColor: "#22c55e",
    backgroundImage:
      "repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.3) 5px, rgba(255,255,255,0.3) 10px)",
  }
  const redStripe = {
    backgroundColor: "#ef4444",
    backgroundImage:
      "repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.3) 5px, rgba(255,255,255,0.3) 10px)",
  }
  const grayDots = {
    backgroundColor: "#e5e7eb",
    backgroundImage: "radial-gradient(#9ca3af 1.5px, transparent 1.5px)",
    backgroundSize: "8px 8px",
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-6 max-w-[1200px]">
        <div className="flex justify-between items-start mb-6 border-b pb-4">
          <div className="text-xs text-gray-500 space-y-1">
            <p>© Curriculum Associates, LLC, All Rights Reserved. | i-Ready.com</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Printer className="h-4 w-4 text-gray-500" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Download className="h-4 w-4 text-gray-500" />
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#00aeb0] mb-4">Diagnostic Results</h1>

          <div className="grid grid-cols-3 gap-8 text-sm mb-12">
            <div>
              <div className="text-xs text-gray-500 mb-1">Subject</div>
              <div className="border rounded px-3 py-2 bg-white flex justify-between items-center">
                Reading <ChevronDown className="h-4 w-4 text-blue-500" />
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Class/Report Group</div>
              <div className="border rounded px-3 py-2 bg-white flex justify-between items-center">
                B. Santana - Grade 3, Section 1 <ChevronDown className="h-4 w-4 text-blue-500" />
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Diagnostic</div>
              <div className="border rounded px-3 py-2 bg-white flex justify-between items-center">
                Diagnostic Window 1 <ChevronDown className="h-4 w-4 text-blue-500" />
              </div>
              <div className="text-xs text-gray-500 mt-1">07/05/24 - 08/20/24</div>
            </div>
          </div>

          {/* Overall Placement Section */}
          <div className="mb-12 max-w-4xl mx-auto">
            <h3 className="text-lg text-gray-700 mb-8 text-center">Overall Placement</h3>

            {/* Counts above bar */}
            <div className="flex w-full text-sm text-gray-500 mb-1 px-1">
              <div className="w-[5%] text-center">1</div>
              <div className="w-[19%] text-center">4</div>
              <div className="w-[24%] text-center">5</div>
              <div className="w-[43%] text-center">9</div>
              <div className="w-[5%] text-center">1</div>
              <div className="w-[5%] text-center">1</div>
            </div>

            {/* Main Progress Bar */}
            <div className="flex h-6 w-full mb-8 rounded-sm overflow-hidden">
              <div className="w-[5%]" style={greenStripe}></div>
              <div className="w-[19%] bg-[#4ade80]"></div>
              <div className="w-[24%] bg-[#facc15]"></div>
              <div className="w-[43%] bg-[#f87171]"></div>
              <div className="w-[5%]" style={redStripe}></div>
              <div className="w-[5%] bg-gray-200"></div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-6 gap-2 text-[10px] text-gray-600 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full" style={greenStripe}></div>
                  <span className="leading-tight text-left">Mid or Above Grade Level</span>
                </div>
                <span className="font-bold">5%</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80]"></div>
                  <span className="leading-tight text-left">Early On Grade Level</span>
                </div>
                <span className="font-bold">19%</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#facc15]"></div>
                  <span className="leading-tight text-left">One Grade Level Below</span>
                </div>
                <span className="font-bold">24%</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f87171]"></div>
                  <span className="leading-tight text-left">Two Grade Levels Below</span>
                </div>
                <span className="font-bold">43%</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full" style={redStripe}></div>
                  <span className="leading-tight text-left">Three or More Grade Levels Below</span>
                </div>
                <span className="font-bold">5%</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                  <span className="leading-tight text-left">Not Completed</span>
                </div>
                <span className="font-bold">5%</span>
              </div>
            </div>
          </div>

          {/* Placement by Domain Section */}
          <div className="bg-gray-50/50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-6 cursor-pointer">
              <ChevronDown className="h-5 w-5 text-blue-500 fill-blue-500" />
              <h3 className="font-bold text-gray-700">Placement by Domain*</h3>
            </div>

            <div className="space-y-4 max-w-5xl">
              {/* PA */}
              <div className="grid grid-cols-[280px_1fr] items-center gap-4">
                <div className="text-sm text-gray-700">
                  Phonological Awareness <span className="text-gray-500 italic">(PA)</span>
                </div>
                <div className="h-4 w-full rounded-sm" style={grayDots}></div>
              </div>

              {/* PH */}
              <div className="grid grid-cols-[280px_1fr] items-center gap-4">
                <div className="text-sm text-gray-700">
                  Phonics <span className="text-gray-500 italic">(PH)</span>
                </div>
                <div className="flex h-4 w-full rounded-sm overflow-hidden">
                  <div className="w-[35%]" style={greenStripe}></div>
                  <div className="w-[5%] bg-[#4ade80]"></div>
                  <div className="w-[15%] bg-[#facc15]"></div>
                  <div className="w-[20%] bg-[#f87171]"></div>
                  <div className="w-[25%]" style={redStripe}></div>
                </div>
              </div>

              {/* HFW */}
              <div className="grid grid-cols-[280px_1fr] items-center gap-4">
                <div className="text-sm text-gray-700">
                  High-Frequency Words <span className="text-gray-500 italic">(HFW)</span>
                </div>
                <div className="flex h-4 w-full rounded-sm overflow-hidden">
                  <div className="w-[75%]" style={greenStripe}></div>
                  <div className="w-[15%] bg-[#facc15]"></div>
                  <div className="w-[10%] bg-[#f87171]"></div>
                </div>
              </div>

              {/* VOC */}
              <div className="grid grid-cols-[280px_1fr] items-center gap-4">
                <div className="text-sm text-gray-700">
                  Vocabulary <span className="text-gray-500 italic">(VOC)</span>
                </div>
                <div className="flex h-4 w-full rounded-sm overflow-hidden">
                  <div className="w-[15%]" style={greenStripe}></div>
                  <div className="w-[20%] bg-[#4ade80]"></div>
                  <div className="w-[35%] bg-[#facc15]"></div>
                  <div className="w-[30%] bg-[#f87171]"></div>
                </div>
              </div>

              {/* LIT */}
              <div className="grid grid-cols-[280px_1fr] items-center gap-4">
                <div className="text-sm text-gray-700">
                  Comprehension: Literature <span className="text-gray-500 italic">(LIT)</span>
                </div>
                <div className="flex h-4 w-full rounded-sm overflow-hidden">
                  <div className="w-[25%]" style={greenStripe}></div>
                  <div className="w-[10%] bg-[#4ade80]"></div>
                  <div className="w-[15%] bg-[#facc15]"></div>
                  <div className="w-[45%] bg-[#f87171]"></div>
                  <div className="w-[5%]" style={redStripe}></div>
                </div>
              </div>

              {/* INFO */}
              <div className="grid grid-cols-[280px_1fr] items-center gap-4">
                <div className="text-sm text-gray-700">
                  Comprehension: Informational Text <br />
                  <span className="text-gray-500 italic">(INFO)</span>
                </div>
                <div className="flex h-4 w-full rounded-sm overflow-hidden">
                  <div className="w-[10%]" style={greenStripe}></div>
                  <div className="w-[40%] bg-[#facc15]"></div>
                  <div className="w-[45%] bg-[#f87171]"></div>
                  <div className="w-[5%]" style={redStripe}></div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2 mt-4">
                <p className="text-[10px] text-gray-500">*Students not completed are not included.</p>
                <div className="flex items-center gap-2 text-[10px] text-gray-500">
                  <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center bg-gray-50">
                    <div className="w-3 h-3 rounded-full" style={grayDots}></div>
                  </div>
                  Not assessed (due to grade or domain exempted)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-2 mt-8">
          <span className="text-sm text-gray-600">Showing 21 of 21</span>
          <div className="flex items-center gap-2 text-sm text-blue-600 font-medium cursor-pointer">
            Choose Your Columns <HelpCircle className="h-4 w-4" />
          </div>
        </div>

        <ResultsTable />
      </main>
    </div>
  )
}
