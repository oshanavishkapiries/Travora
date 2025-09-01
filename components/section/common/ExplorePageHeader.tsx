// ==================== Explore Page Header Component Start ====================
"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface ExplorePageHeaderProps {
  title: string;
  description: string;
  backHref?: string;
  backText?: string;
}

export default function ExplorePageHeader({
  title,
  description,
  backHref = "/",
  backText = "Back to Home",
}: ExplorePageHeaderProps) {
  return (
    <div className="mb-8">
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
      >
        <ChevronLeft className="h-4 w-4" />
        {backText}
      </Link>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
        {title}
      </h1>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
}

// ==================== Explore Page Header Component End ====================
