
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface DatePickerFieldProps {
  label: string;
  value?: Date;
  onChange: (date: Date | undefined) => void;
  minDate?: Date;
  isRequired?: boolean;
}

const DatePickerField = ({
  label,
  value,
  onChange,
  minDate,
  isRequired = false,
}: DatePickerFieldProps) => {
  return (
    <div className="space-y-2">
      <Label>{label} {isRequired && "*"}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-right"
          >
            <CalendarIcon className="ml-2 h-4 w-4" />
            {value ? (
              format(value, "dd MMMM yyyy", { locale: ar })
            ) : (
              <span>اختر تاريخاً</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            disabled={minDate ? (date) => date < minDate : undefined}
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePickerField;
