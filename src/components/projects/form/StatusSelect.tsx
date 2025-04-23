
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface StatusSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const StatusSelect = ({ value, onChange }: StatusSelectProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="status">حالة المشروع *</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id="status">
          <SelectValue placeholder="اختر حالة المشروع" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pending">مخطط</SelectItem>
          <SelectItem value="in_progress">قيد التنفيذ</SelectItem>
          <SelectItem value="completed">مكتمل</SelectItem>
          <SelectItem value="cancelled">ملغي</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default StatusSelect;
