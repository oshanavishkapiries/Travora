// ==================== Error Message Component Start ====================
"use client";

import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorMessageProps {
  error?: Error | null;
  uploadError?: string | null;
  onClear: () => void;
}

export default function ErrorMessage({
  error,
  uploadError,
  onClear,
}: ErrorMessageProps) {
  if (!error && !uploadError) return null;

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <p className="text-red-800">{error?.message || uploadError}</p>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="text-red-600 hover:text-red-800"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

// ==================== Error Message Component End ====================
