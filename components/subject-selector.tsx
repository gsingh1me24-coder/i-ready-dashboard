import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function SubjectSelector() {
  return (
    <div className="mb-6">
      <Select defaultValue="reading">
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="Select subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="reading">Reading</SelectItem>
          <SelectItem value="math">Math</SelectItem>
          <SelectItem value="science">Science</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
