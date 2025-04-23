
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { ComplaintsFormInput } from "../schema";
import { useState, useEffect } from "react";
import { FieldError } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface SearchableDropdownProps {
  form: UseFormReturn<ComplaintsFormInput>;
  name: keyof ComplaintsFormInput;
  label: string;
  placeholder: string;
  emptyMessage: string;
  options: Option[];
  onSelect?: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  disabled?: boolean;
  error?: FieldError;
}

export function SearchableDropdown({
  form,
  name,
  label,
  placeholder,
  emptyMessage,
  options = [],
  onSelect,
  open,
  setOpen,
  disabled = false,
  error,
}: SearchableDropdownProps) {
  // Ensure options is always a valid array (defensive programming)
  const safeOptions = Array.isArray(options) ? options : [];
  
  // State for filtered options - initialize with safe options
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(safeOptions);
  
  // Reset filtered options when the original options change
  useEffect(() => {
    console.log(`SearchableDropdown ${name} - options updated:`, safeOptions);
    setFilteredOptions(safeOptions);
  }, [safeOptions, name]);

  // Get the current field value
  const fieldValue = form.watch(name);

  // Find the selected option based on the current value
  const selectedOption = safeOptions.find((option) => option.value === fieldValue);
  
  // Filter function for search
  const handleFilter = (value: string) => {
    if (!value) {
      setFilteredOptions(safeOptions);
      return;
    }
    
    const filtered = safeOptions.filter((option) => 
      option.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };
  
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col w-full">
          <FormLabel>{label}</FormLabel>
          <Popover 
            open={open} 
            onOpenChange={(newOpen) => {
              if (!disabled) {
                setOpen(newOpen);
                // Reset filtered options when opening
                if (newOpen) {
                  setFilteredOptions(safeOptions);
                }
              }
            }}
          >
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className={cn(
                    "w-full justify-between overflow-hidden text-right",
                    disabled && "opacity-50 cursor-not-allowed",
                    !field.value && "text-muted-foreground"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    if (!disabled) {
                      setOpen(!open);
                    }
                  }}
                  disabled={disabled}
                >
                  <div className="flex items-center justify-between w-full">
                    <ChevronDown className="h-4 w-4 opacity-50 flex-shrink-0" />
                    <span className="truncate ml-2">
                      {field.value 
                        ? safeOptions.find((option) => option.value === field.value)?.label || placeholder
                        : placeholder}
                    </span>
                  </div>
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent 
              className="w-[var(--radix-popover-trigger-width)] p-0" 
              align="start"
              sideOffset={5}
            >
              <Command dir="rtl">
                <CommandInput 
                  placeholder={`ابحث عن ${label}...`} 
                  onValueChange={handleFilter}
                  className="text-right"
                />
                <CommandList>
                  {filteredOptions.length > 0 ? (
                    <CommandGroup>
                      <ScrollArea className="h-60">
                        {filteredOptions.map((option) => (
                          <CommandItem
                            key={option.value}
                            value={option.value}
                            onSelect={() => {
                              form.setValue(name, option.value, { shouldValidate: true });
                              if (onSelect) onSelect(option.value);
                              setOpen(false);
                            }}
                            className="text-right flex-row-reverse justify-end"
                          >
                            {option.label}
                            <Check
                              className={cn(
                                "mr-auto h-4 w-4",
                                field.value === option.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </ScrollArea>
                    </CommandGroup>
                  ) : (
                    <CommandEmpty>{emptyMessage}</CommandEmpty>
                  )}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {error ? (
            <p className="text-sm font-medium text-destructive">{error.message}</p>
          ) : (
            <FormMessage />
          )}
        </FormItem>
      )}
    />
  );
}
