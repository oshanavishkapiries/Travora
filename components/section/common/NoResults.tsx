// ==================== No Results Component Start ====================
"use client";

import React from "react";

interface NoResultsProps {
  message: string;
  className?: string;
}

export default function NoResults({
  message,
  className = "text-center py-12",
}: NoResultsProps) {
  return (
    <div className={className}>
      <p className="text-lg text-gray-600">{message}</p>
    </div>
  );
}

// ==================== No Results Component End ====================
