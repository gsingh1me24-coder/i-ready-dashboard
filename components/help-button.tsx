'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { HelpCircle } from 'lucide-react'

export function HelpButton() {
  const [notifications] = useState(2)

  return (
    <div className="fixed bottom-6 right-6">
      <Button
        size="lg"
        className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg relative"
      >
        <HelpCircle className="w-6 h-6" />
      </Button>
    </div>
  )
}
