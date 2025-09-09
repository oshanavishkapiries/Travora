// ==================== Error State Component Start ====================
"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  error?: Error | null;
  onRetry: () => void;
}

export default function ErrorState({ error, onRetry }: ErrorStateProps) {
  return (
    <div className="text-center py-12">
      <MapPin className="h-12 w-12 text-red-400 mx-auto mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        Failed to load attractions
      </h3>
      <p className="text-gray-600 mb-4">
        {error?.message || "Something went wrong while loading attractions"}
      </p>
      <Button onClick={onRetry} className="bg-blue-600 hover:bg-blue-700">
        Try Again
      </Button>
    </div>
  );
}

// ==================== Error State Component End ====================
