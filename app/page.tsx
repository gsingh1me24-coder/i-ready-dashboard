import { Header } from '@/components/header'
import { SubjectSelector } from '@/components/subject-selector'
import { DiagnosticCards } from '@/components/diagnostic-cards'
import { DiagnosticProgress } from '@/components/diagnostic-progress'
import { HelpButton } from '@/components/help-button'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-6">
        <SubjectSelector />
        <DiagnosticCards />
        <DiagnosticProgress />
      </main>
      <HelpButton />
    </div>
  )
}
