// ==================== Loading Skeleton Component Start ====================
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <Card key={index} className="overflow-hidden p-0">
          <div className="w-full h-48 bg-gray-200 animate-pulse" />
          <CardContent className="p-4">
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-3 bg-gray-200 rounded animate-pulse mb-3" />
            <div className="h-3 bg-gray-200 rounded animate-pulse w-2/3" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// ==================== Loading Skeleton Component End ====================
