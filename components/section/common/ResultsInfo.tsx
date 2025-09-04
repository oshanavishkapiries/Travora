// ==================== Results Info Component Start ====================
"use client";

import React from "react";

interface ResultsInfoProps {
  startIndex: number;
  endIndex: number;
  totalItems: number;
  itemType: string;
  className?: string;
}

export default function ResultsInfo({
  startIndex,
  endIndex,
  totalItems,
  itemType,
  className = "mb-6 flex items-center justify-between",
}: ResultsInfoProps) {
  return (
    <div className={className}>
      <p className="text-sm text-gray-600">
        Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of{" "}
        {totalItems} {itemType}
      </p>
    </div>
  );
}

// ==================== Results Info Component End ====================
