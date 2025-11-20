"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, Plus, ChevronRight, Lightbulb, Menu, Copy, ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
  role: "user" | "assistant"
  content: string
  attachment?: {
    title: string
    subtitle: string
    image?: string
  }
}

export function TeacherCopilot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [onboardingStep, setOnboardingStep] = useState<"idle" | "ask_new_teacher" | "ask_analyze_reports" | "ready">(
    "idle",
  )
  const pathname = usePathname()
  const router = useRouter()
  const scrollRef = useRef<HTMLDivElement>(null)

  const knowledgeBase = [
    {
      question: "how do i group students",
      answer:
        "You can group students by clicking on the 'Assess & Teach' dropdown and selecting 'Instructional Grouping'. From there, you can create groups based on diagnostic results.",
    },
    {
      question: "what is a diagnostic",
      answer:
        "The i-Ready Diagnostic is an adaptive assessment designed to provide teachers with actionable insight into student needs. It adjusts to each student's ability level.",
    },
    {
      question: "what is the typical growth for this student",
      answer:
        "The typical growth for student Leach is determined by their baseline Diagnostic score and their Typical Growth and Stretch Growth targets. Leach has made 54% progress toward Stretch Growth, indicating they are on a path toward proficiency but may need to meet or exceed their Stretch Growth target to achieve proficiency.\n\nClassroom Actions:\n1. **Set Specific Goals**: Work with Leach to set specific, achievable goals for the next assessment period.\n2. **Targeted Interventions**: Implement targeted interventions in areas where Leach is below grade level.\n3. **Regular Monitoring**: Frequently monitor Leach's progress through formative assessments.\n4. **Encourage Practice**: Provide additional practice opportunities in areas of weakness.",
    },
    {
      question: "what domains is this student lagging in",
      answer:
        "Domain summary for Leach (counts below benchmark):\n- PA: 0 students\n- PH: 0 students\n- HFW: 0 students\n- VOC: 0 students\n- LIT: 0 students\n- INFO: 0 students\n\nIt appears this student is meeting benchmarks in these domains based on the current data snapshot.",
    },
    {
      question: "what is the overall placement for this student",
      answer:
        "The overall placement for student Leach in grade 3 reading during Diagnostic 1 is not explicitly provided in the context. However, the class data shows that 38% of students are at mid or above grade level, 38% are early on grade level, 10% are one grade level below, and 14% are two grade levels below.\n\nClassroom Actions:\n1. Review individual student reports to identify Leach's specific placement.\n2. Implement targeted reading interventions for students identified as below grade level.\n3. Conduct small group reading sessions.\n4. Use formative assessments to track progress.",
    },
    {
      question: "how does this student compare to the class",
      answer:
        "Based on the class data: 38% of students are at mid or above grade level, while 14% are two grade levels below. Leach's specific placement relative to this distribution would require looking at their specific scale score compared to the class average.",
    },
  ]

  // Initialize chat based on current page
  useEffect(() => {
    if (messages.length === 0) {
      if (pathname === "/diagnostic-results") {
        setMessages([
          {
            role: "assistant",
            content:
              "Here's an overview of your class. If you'd like, I can help you identify specific skills that individual students need to work with, suggest lessons, or even recommend groupings.",
          },
        ])
        setOnboardingStep("ready")
      } else if (pathname === "/") {
        setMessages([
          {
            role: "assistant",
            content: "Welcome to Teacher's Insight Ed! Are you a new teacher?",
          },
        ])
        setOnboardingStep("ask_new_teacher")
      }
    }
  }, [pathname, messages.length])

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isOpen])

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    const newMessages = [...messages, { role: "user", content: text } as Message]
    setMessages(newMessages)
    setInputValue("")

    // Simulate AI response
    setTimeout(() => {
      let response: Message = {
        role: "assistant",
        content: "I can help with that.",
      }

      if (onboardingStep === "ask_new_teacher") {
        const lowerText = text.toLowerCase()
        if (lowerText.includes("yes") || lowerText.includes("no")) {
          response = {
            role: "assistant",
            content: "Do you want to analyze reports of students?",
          }
          setOnboardingStep("ask_analyze_reports")
        } else {
          response = {
            role: "assistant",
            content: "Please answer Yes or No. Are you a new teacher?",
          }
        }
      } else if (onboardingStep === "ask_analyze_reports") {
        const lowerText = text.toLowerCase()
        if (lowerText.includes("yes")) {
          response = {
            role: "assistant",
            content: "Great! I can help you with that. You can ask me specific questions about your students' reports.",
          }
          setOnboardingStep("ready")
        } else if (lowerText.includes("no")) {
          response = {
            role: "assistant",
            content: "Understood. How else can I assist you today?",
          }
          setOnboardingStep("ready")
        } else {
          response = {
            role: "assistant",
            content: "Please answer Yes or No. Do you want to analyze reports of students?",
          }
        }
      } else {
        const lowerText = text.toLowerCase()

        // Check knowledge base first
        const kbMatch = knowledgeBase.find((kb) => lowerText.includes(kb.question))

        if (kbMatch) {
          response = {
            role: "assistant",
            content: kbMatch.answer,
          }
        } else if (text.includes("struggling students")) {
          response = {
            role: "assistant",
            content:
              "Here are the students who are currently performing below grade level on the most recent assessment.",
          }
        } else if (text.includes("lesson ideas")) {
          response = {
            role: "assistant",
            content:
              "One skill this group needs to work on is Shape Identification. Here's an i-Ready Lesson Plan you can use.",
            attachment: {
              title: "Tools for Instruction",
              subtitle: "Identify Shapes",
              image: "/blank-worksheet.png",
            },
          }
        } else if (text.includes("reading")) {
          response = {
            role: "assistant",
            content:
              "Your students are showing steady progress in reading. 15 students have not started their diagnostic yet.",
          }
        } else {
          // Default fallback if no match found
          response = {
            role: "assistant",
            content: "I'm listening. You can ask me about student reports, lesson plans, or how to use the dashboard.",
          }
        }
      }

      setMessages([...newMessages, response])
    }, 1000)
  }

  const getSuggestions = () => {
    if (onboardingStep === "ask_new_teacher" || onboardingStep === "ask_analyze_reports") {
      return ["Yes", "No"]
    }

    return pathname === "/"
      ? ["How are my students doing in reading?", "How are my students doing in math?", "Help me teach something"]
      : ["Please help me identify my struggling students.", "Help me with some lesson ideas for these students..."]
  }

  const suggestions = getSuggestions()

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#00aec7] hover:bg-[#0097ad] shadow-lg z-50"
      >
        <div className="relative">
          <Lightbulb className="h-6 w-6 text-white" />
        </div>
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-6 right-6 w-[380px] h-[600px] shadow-2xl border-0 rounded-xl z-50 flex flex-col overflow-hidden font-sans">
      <div className="p-4 border-b flex justify-between items-center bg-white shadow-sm z-10">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-lg text-gray-900">Teacher's Insight Ed</h3>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:bg-gray-100 rounded-full">
            <Menu className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setIsOpen(false)
              setMessages([]) // Clear messages when closing so the chat resets
              setOnboardingStep("idle") // Reset onboarding step
            }}
            className="h-8 w-8 text-gray-500 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>

      <div className="flex-1 p-4 bg-white overflow-y-auto" ref={scrollRef}>
        <div className="space-y-6">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col max-w-[90%]",
                msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start",
              )}
            >
              <div
                className={cn(
                  "px-4 py-3 text-[15px] leading-relaxed",
                  msg.role === "user"
                    ? "bg-[#e1f5f9] text-gray-900 rounded-2xl rounded-tr-sm" // Light teal for user
                    : "bg-[#f3f4f6] text-gray-900 rounded-2xl rounded-tl-sm", // Light gray for assistant
                )}
              >
                {msg.content}
              </div>

              {msg.attachment && (
                <div className="mt-2 bg-white border border-gray-200 rounded-xl p-3 shadow-sm w-full max-w-[280px]">
                  <div className="bg-[#00aec7] text-white text-xs font-bold px-2 py-1 rounded-sm inline-block mb-2">
                    {msg.attachment.title}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{msg.attachment.subtitle}</h4>
                  <div className="border border-gray-100 rounded p-2 bg-gray-50 mb-2">
                    <div className="text-[11px] text-gray-600 leading-tight">
                      <p className="mb-1">
                        <strong>Objective:</strong> Identify circles, squares, and triangles.
                      </p>
                      <p>Geometric understanding comes from interactions with objects in the real world...</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0 rounded-full bg-white hover:bg-gray-50">
                      <Plus className="h-4 w-4 text-gray-500" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0 rounded-full bg-white hover:bg-gray-50">
                      <ChevronRight className="h-4 w-4 text-gray-500" />
                    </Button>
                  </div>
                </div>
              )}

              {msg.role === "assistant" && (
                <div className="flex items-center gap-1 mt-1 ml-1">
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-gray-600">
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-gray-600">
                    <ThumbsUp className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-gray-600">
                    <ThumbsDown className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-gray-600">
                    <MessageSquare className="h-3.5 w-3.5" />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-white">
        <div className="flex flex-wrap gap-2 mb-3">
          {suggestions.map((suggestion, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(suggestion)}
              className="text-xs bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg transition-colors text-left shadow-sm"
            >
              {suggestion}
            </button>
          ))}
        </div>
        <div className="relative">
          <Button variant="ghost" size="icon" className="absolute left-1 top-1/2 -translate-y-1/2 h-8 w-8">
            <Plus className="h-5 w-5 text-gray-400" />
          </Button>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
            placeholder={pathname === "/" ? "Ask Teacher's Insight Ed" : "Help me with..."}
            className="pl-10 pr-10 py-6 rounded-xl border-gray-200 bg-gray-50 focus:bg-white transition-all"
          />
          <Button
            onClick={() => handleSendMessage(inputValue)}
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
          >
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
