// ==================== Tour Quick Stats Component Start ====================
"use client";

import React from "react";
import { Calendar, Clock, Users } from "lucide-react";

interface TourQuickStatsProps {
  className?: string;
  gridClassName?: string;
  itemClassName?: string;
  iconClassName?: string;
  labelClassName?: string;
  valueClassName?: string;
}

const stats = [
  {
    icon: Calendar,
    label: "Duration",
    value: "3 Days",
  },
  {
    icon: Clock,
    label: "Start Time",
    value: "9:00 AM",
  },
  {
    icon: Users,
    label: "Group Size",
    value: "Max 12",
  },
];

export default function TourQuickStats({
  gridClassName = "grid grid-cols-3 gap-4 py-4 border-b border-gray-200",
  itemClassName = "text-center",
  iconClassName = "h-6 w-6 mx-auto mb-2 text-blue-600",
  labelClassName = "text-xs text-gray-600",
  valueClassName = "text-sm font-semibold",
}: TourQuickStatsProps) {
  return (
    <div className={gridClassName}>
      {stats.map((stat, index) => (
        <div key={index} className={itemClassName}>
          <stat.icon className={iconClassName} />
          <p className={labelClassName}>{stat.label}</p>
          <p className={valueClassName}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

// ==================== Tour Quick Stats Component End ====================
