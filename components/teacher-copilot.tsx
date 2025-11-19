"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send, Plus, FileText, ChevronRight, Lightbulb } from 'lucide-react'
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
  const pathname = usePathname()
  const router = useRouter()
  const scrollRef = useRef<HTMLDivElement>(null)

  // Initialize chat based on current page
  useEffect(() => {
    if (pathname === "/diagnostic-results" && messages.length === 0) {
       setMessages([
        {
          role: "assistant",
          content: "Here's an overview of your class. If you'd like, I can help you identify specific skills that individual students need to work with, suggest lessons, or even recommend groupings."
        }
      ])
    } else if (pathname === "/" && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content: "Welcome to the i-Ready Reporting tool. I'm your Teacher Copilot. How can I help you today?"
        }
      ])
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
        content: "I can help with that."
      }

      if (text.includes("struggling students")) {
        response = {
          role: "assistant",
          content: "Here are the students who are currently performing below grade level on the most recent assessment."
        }
      } else if (text.includes("lesson ideas")) {
        response = {
          role: "assistant",
          content: "One skill this group needs to work on is Shape Identification. Here's an i-Ready Lesson Plan you can use.",
          attachment: {
            title: "Tools for Instruction",
            subtitle: "Identify Shapes",
            image: "/blank-worksheet.png"
          }
        }
      } else if (text.includes("reading")) {
        response = {
          role: "assistant",
          content: "Your students are showing steady progress in reading. 15 students have not started their diagnostic yet."
        }
      }

      setMessages([...newMessages, response])
    }, 1000)
  }

  const suggestions = pathname === "/" 
    ? ["How are my students doing in reading?", "How are my students doing in math?", "Help me teach something"]
    : ["Please help me identify my struggling students.", "Help me with some lesson ideas for these students..."]

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#0076ce] hover:bg-[#0065b0] shadow-lg z-50"
      >
        <div className="relative">
          <Lightbulb className="h-6 w-6 text-white" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
            2
          </span>
        </div>
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-6 right-6 w-[400px] h-[600px] shadow-2xl border-2 border-black z-50 flex flex-col overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center bg-white">
        <h3 className="font-bold text-lg">Teacher Co-Pilot</h3>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <ScrollArea className="flex-1 p-4 bg-gray-50" ref={scrollRef}>
        <div className="space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col max-w-[85%] space-y-2",
                msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
              )}
            >
              <div
                className={cn(
                  "p-3 rounded-2xl text-sm",
                  msg.role === "user"
                    ? "bg-black text-white rounded-br-none"
                    : "bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm"
                )}
              >
                {msg.content}
              </div>
              
              {msg.attachment && (
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm w-full max-w-[280px]">
                  <div className="bg-[#00a7b5] text-white text-xs font-bold px-2 py-1 rounded-sm inline-block mb-2">
                    {msg.attachment.title}
                  </div>
                  <h4 className="font-bold text-blue-600 mb-2">{msg.attachment.subtitle}</h4>
                  <div className="border border-gray-200 rounded p-2 bg-gray-50 mb-2">
                    <div className="text-[10px] text-gray-500 leading-tight">
                      <p className="mb-1"><strong>Objective:</strong> Identify circles, squares, and triangles.</p>
                      <p>Geometric understanding comes from interactions with objects in the real world...</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0 rounded-full">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0 rounded-full">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 bg-white border-t">
        <div className="flex flex-wrap gap-2 mb-3">
          {suggestions.map((suggestion, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(suggestion)}
              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-full transition-colors text-left"
            >
              {suggestion}
            </button>
          ))}
        </div>
        <div className="relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute left-1 top-1/2 -translate-y-1/2 h-8 w-8"
          >
            <Plus className="h-5 w-5 text-gray-500" />
          </Button>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
            placeholder={pathname === "/" ? "Ask Teacher Co-Pilot" : "Help me with..."}
            className="pl-10 pr-10 rounded-full border-gray-300"
          />
          <Button 
            onClick={() => handleSendMessage(inputValue)}
            variant="ghost" 
            size="icon" 
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
          >
            <ChevronRight className="h-5 w-5 text-gray-500" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
