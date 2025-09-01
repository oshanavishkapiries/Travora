// ==================== Not Found Page Start ====================
"use client";

import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <Search className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Tour Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Sorry, the tour you&apos;re looking for doesn&apos;t exist or has
            been removed.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <Button variant="outline" className="w-full">
              Go to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ==================== Not Found Page End ====================
