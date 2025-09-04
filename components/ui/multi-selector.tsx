"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
import { Badge } from "@/components/ui/badge";

export interface Option {
  label: string;
  value: string;
}

interface MultiSelectorProps {
  options: Option[];
  defaultOptions?: Option[];
  onValueChange?: (options: Option[]) => void;
  placeholder?: string;
  variant?: "default" | "inverted";
  animation?: number;
  maxCount?: number;
  asChild?: boolean;
  className?: string;
  disabled?: boolean;
  emptyIndicator?: React.ReactNode;
  hidePlaceholderWhenSelected?: boolean;
  maxSelected?: number;
  onMaxSelected?: (maxLimit: number) => void;
  selected?: string[];
  onChange?: (selected: string[]) => void;
}

const MultiSelector = React.forwardRef<HTMLButtonElement, MultiSelectorProps>(
  (
    {
      className,
      selected = [],
      onChange,
      options,
      onValueChange,
      disabled,
      placeholder,
      maxSelected,
      onMaxSelected,
      emptyIndicator,
      hidePlaceholderWhenSelected = false,
      ...props
    },
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const [open, setOpen] = React.useState(false);

    const handleUnselect = (item: string) => {
      if (disabled) return;
      const newSelected = selected.filter((i) => i !== item);
      onChange?.(newSelected);
      onValueChange?.(
        options.filter((option) => newSelected.includes(option.value))
      );
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Backspace" && e.keyCode === 8 && selected.length > 0) {
        handleUnselect(selected[selected.length - 1]);
      }
    };

    return (
      <div
        {...props}
        className={cn("w-full", className)}
        onKeyDown={handleKeyDown}
      >
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              ref={ref}
              aria-expanded={open}
              variant="outline"
              className={`w-full justify-between ${
                selected.length > 1 ? "h-full" : "h-10"
              }`}
              onClick={() => setOpen(!disabled && !open)}
              disabled={disabled}
            >
              <div className="flex gap-1 flex-wrap">
                {selected.length > 0 ? (
                  <>
                    {selected.map((item) => {
                      const option = options.find((opt) => opt.value === item);
                      return (
                        <Badge
                          variant="secondary"
                          key={item}
                          className="mr-1 mb-1"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleUnselect(item);
                          }}
                        >
                          {option?.label}
                          <span
                            className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer hover:bg-muted-foreground/20 p-0.5"
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleUnselect(item);
                              }
                            }}
                            onMouseDown={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleUnselect(item);
                            }}
                            role="button"
                            tabIndex={0}
                            aria-label={`Remove ${option?.label}`}
                          >
                            <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                          </span>
                        </Badge>
                      );
                    })}
                    {maxSelected &&
                      selected.length >= maxSelected &&
                      onMaxSelected?.(maxSelected)}
                  </>
                ) : (
                  <span
                    className={cn(
                      "text-muted-foreground",
                      hidePlaceholderWhenSelected &&
                        selected.length > 0 &&
                        "hidden"
                    )}
                  >
                    {placeholder}
                  </span>
                )}
              </div>
              <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0" align="start">
            <Command>
              <CommandInput placeholder="Search ..." />
              <CommandList>
                {options.length === 0 ? (
                  <CommandEmpty>{emptyIndicator}</CommandEmpty>
                ) : (
                  <CommandGroup>
                    {options.map((option) => (
                      <CommandItem
                        key={option.value}
                        onSelect={() => {
                          if (disabled) return;
                          const newSelected = selected.includes(option.value)
                            ? selected.filter((item) => item !== option.value)
                            : maxSelected && selected.length >= maxSelected
                            ? selected
                            : [...selected, option.value];
                          onChange?.(newSelected);
                          onValueChange?.(
                            options.filter((opt) =>
                              newSelected.includes(opt.value)
                            )
                          );
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selected.includes(option.value)
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {option.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    );
  }
);

MultiSelector.displayName = "MultiSelector";

export { MultiSelector };
