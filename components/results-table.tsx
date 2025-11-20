const students = [
  {
    id: 1,
    name: "Kramer, Maya",
    grade: "Mid 3 (553)",
    domains: ["Not Assessed", "Surpassed Level", "Surpassed Level", "Late 3", "Late 3", "Grade 2"],
    growth: { typical: 17, stretch: 21 },
    alert: false,
  },
  {
    id: 2,
    name: "Lal, Mia",
    grade: "Early 3 (541)",
    domains: ["Not Assessed", "Surpassed Level", "Surpassed Level", "Early 3", "Early 3", "Late 3"],
    growth: { typical: 22, stretch: 39 },
    alert: false,
  },
  {
    id: 3,
    name: "Romero, Isaiah",
    grade: "Early 3 (541)",
    domains: ["Not Assessed", "Surpassed Level", "Surpassed Level", "Early 3", "Mid 3", "Mid 3"],
    growth: { typical: 22, stretch: 39 },
    alert: false,
  },
  {
    id: 4,
    name: "Melton, Abby",
    grade: "Early 3 (524)",
    domains: ["Not Assessed", "Surpassed Level", "Surpassed Level", "Late 3", "Mid 3", "Grade 1"],
    growth: { typical: 22, stretch: 39 },
    alert: false,
  },
  {
    id: 5,
    name: "Montez, Zarita",
    grade: "Early 3 (524)",
    domains: ["Not Assessed", "Surpassed Level", "Surpassed Level", "Late 3", "Mid 3", "Grade 1"],
    growth: { typical: 22, stretch: 39 },
    alert: false,
  },
  {
    id: 6,
    name: "Sharpe, Lucy",
    grade: "Grade 2 (508)",
    domains: ["Not Assessed", "Grade 2", "Surpassed Level", "Grade 2", "Mid 3", "Grade 2"],
    growth: { typical: 26, stretch: 40 },
    alert: false,
  },
  {
    id: 7,
    name: "Shaw, Miguel",
    grade: "Grade 2 (507)",
    domains: ["Not Assessed", "Mid 3", "Surpassed Level", "Grade 2", "Early 3", "Grade 2"],
    growth: { typical: 26, stretch: 40 },
    alert: false,
  },
  {
    id: 8,
    name: "Lopez, Jessie",
    grade: "Grade 2 (506)",
    domains: ["Not Assessed", "Surpassed Level", "Surpassed Level", "Early 3", "Grade 1", "Grade 2"],
    growth: { typical: 26, stretch: 40 },
    alert: false,
  },
  {
    id: 9,
    name: "Do, Brian",
    grade: "Grade 2 (489)",
    domains: ["Not Assessed", "Grade 2", "Surpassed Level", "Early 3", "Grade 1", "Grade 2"],
    growth: { typical: 26, stretch: 40 },
    alert: false,
  },
  {
    id: 10,
    name: "Farrell, Alvaro",
    grade: "Grade 2 (489)",
    domains: ["Not Assessed", "Early 3", "Surpassed Level", "Grade 2", "Grade 2", "Grade 1"],
    growth: { typical: 26, stretch: 40 },
    alert: false,
  },
  {
    id: 11,
    name: "Holland, Tarak",
    grade: "Grade 1 (472)",
    domains: ["Not Assessed", "Grade K", "Grade 2", "Grade 1", "Grade 1", "Grade 2"],
    growth: { typical: 33, stretch: 63 },
    alert: false,
  },
  {
    id: 12,
    name: "McDaniel, Jazmin",
    grade: "Grade 1 (472)",
    domains: ["Not Assessed", "Grade 1", "Surpassed Level", "Grade 2", "Grade 2", "Grade 1"],
    growth: { typical: 33, stretch: 63 },
    alert: false,
  },
  {
    id: 13,
    name: "Phillips, Austin",
    grade: "Grade 1 (469)",
    domains: ["Not Assessed", "Grade 1", "Surpassed Level", "Grade 1", "Grade 2", "Grade 2"],
    growth: { typical: 33, stretch: 63 },
    alert: false,
  },
  {
    id: 14,
    name: "Jenkins, Deven",
    grade: "Grade 1 (468)",
    domains: ["Not Assessed", "Grade K", "Grade 2", "Grade 1", "Grade 1", "Grade 2"],
    growth: { typical: 33, stretch: 63 },
    alert: false,
  },
  {
    id: 15,
    name: "Harvey, Ivan",
    grade: "Grade 1 (458)",
    domains: ["Not Assessed", "Grade K", "Grade 2", "Grade 2", "Grade 1", "Grade 1"],
    growth: { typical: 33, stretch: 63 },
    alert: false,
  },
  {
    id: 16,
    name: "Simon, William",
    grade: "Grade 1 (455)",
    domains: ["Not Assessed", "Grade K", "Grade 1", "Grade 2", "Grade 1", "Grade 1"],
    growth: { typical: 33, stretch: 63 },
    alert: false,
  },
  {
    id: 17,
    name: "Combs, Natalie",
    grade: "Grade 1 (454)",
    domains: ["Not Assessed", "Grade 1", "Surpassed Level", "Grade 1", "Grade 1", "Grade 1"],
    growth: { typical: 33, stretch: 63 },
    alert: false,
  },
  {
    id: 18,
    name: "Finch, Carla",
    grade: "Grade 1 (450)",
    domains: ["Not Assessed", "Grade K", "Grade 1", "Grade 2", "Grade 1", "Grade 1"],
    growth: { typical: 33, stretch: 63 },
    alert: false,
  },
  {
    id: 19,
    name: "Moreno, Nicolas",
    grade: "Grade 1 (446)",
    domains: ["Not Assessed", "Grade 2", "Surpassed Level", "Grade 1", "Grade 1", "Grade 1"],
    growth: { typical: 33, stretch: 63 },
    alert: false,
  },
  {
    id: 20,
    name: "Noel, Asher",
    grade: "Grade K (415)",
    domains: ["Not Assessed", "Grade 1", "Surpassed Level", "Grade 1", "Grade K", "Grade K"],
    growth: { typical: 36, stretch: 79 },
    alert: false,
  },
  {
    id: 21,
    name: "Shin, Hee",
    grade: "Not Completed",
    domains: ["—", "—", "—", "—", "—", "—"],
    growth: { typical: "—", stretch: "—" },
    alert: false,
  },
]

export function ResultsTable() {
  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-[180px_140px_1fr_140px] border-b bg-gray-100 text-sm text-gray-600">
        {/* Added Search input to the first column header */}
        <div className="p-2 flex items-center justify-center border-r border-gray-200">
          <div className="relative w-full">
            <span className="font-bold text-gray-700 block text-center">Student</span>
          </div>
        </div>

        {/* Added Overall Placement dropdown to the second column header */}
        <div className="p-2 flex items-center justify-center border-r border-gray-200 text-center">
          <div className="flex flex-col items-center leading-tight">
            <span className="font-bold text-gray-700">Overall Placement &</span>
            <span className="font-bold text-gray-700">Scale Score</span>
          </div>
        </div>

        <div className="border-r border-gray-200">
          <div className="p-2 text-center border-b border-gray-200 bg-gray-100 text-xs font-bold text-gray-700">
            Placement by Domain
          </div>
          <div className="grid grid-cols-6 h-[40px]">
            {["PA", "PH", "HFW", "VOC", "LIT", "INFO"].map((domain) => (
              <div
                key={domain}
                className="p-1 text-center border-r border-gray-200 last:border-r-0 flex items-center justify-center text-[10px] font-bold text-gray-700"
              >
                {domain}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="p-2 text-center border-b border-gray-200 bg-gray-100 text-xs font-bold text-gray-700">
            Annual Growth Measures
          </div>
          <div className="grid grid-cols-2 h-[40px]">
            <div className="p-1 text-center border-r border-gray-200 text-[10px] leading-tight flex flex-col items-center justify-center bg-gray-100 font-bold text-gray-700">
              Typical
              <br />
              Growth
            </div>
            <div className="p-1 text-center text-[10px] leading-tight flex flex-col items-center justify-center bg-gray-100 font-bold text-gray-700">
              Stretch
              <br />
              Growth®
            </div>
          </div>
        </div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-200">
        {students.map((student) => (
          <div key={student.id} className="grid grid-cols-[180px_140px_1fr_140px] hover:bg-gray-50 text-xs">
            <div className="p-2 flex items-center text-blue-600 font-medium cursor-pointer hover:underline border-r border-gray-200">
              {student.name}
            </div>
            <div className="p-2 border-r border-gray-200 flex items-center justify-center text-center font-medium">
              {student.grade}
            </div>
            <div className="border-r border-gray-200 grid grid-cols-6">
              {student.domains.map((domain, i) => {
                let bgClass = "bg-white"
                if (domain === "Not Assessed") bgClass = "bg-gray-100 text-gray-400 text-[10px] leading-tight"
                else if (domain === "Surpassed Level") bgClass = "bg-green-100 text-green-700 text-[10px] leading-tight"
                else if (domain.includes("Grade K") || domain.includes("Grade 1"))
                  bgClass = "bg-red-50 text-red-700" // Simplified logic for "below level" styling
                else if (domain.includes("Grade 2")) bgClass = "bg-yellow-50 text-yellow-700"
                else if (domain.includes("Early 3") || domain.includes("Mid 3") || domain.includes("Late 3"))
                  bgClass = "bg-green-50 text-green-700"

                return (
                  <div
                    key={i}
                    className={`p-1 border-r border-gray-200 last:border-r-0 flex items-center justify-center text-center ${bgClass}`}
                  >
                    {domain === "Not Assessed"
                      ? "Not\nAssessed"
                      : domain === "Surpassed Level"
                        ? "Surpassed\nLevel"
                        : domain}
                  </div>
                )
              })}
            </div>
            <div className="grid grid-cols-2">
              <div className="p-2 border-r border-gray-200 flex items-center justify-center">
                {student.growth.typical}
              </div>
              <div className="p-2 flex items-center justify-center">{student.growth.stretch}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
