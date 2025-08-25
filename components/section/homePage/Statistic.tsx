import * as React from "react";

interface StatisticProps {
  number: string | number;
  label: string;
  suffix?: string;
}

export default function Statistic({ number, label, suffix = "+" }: StatisticProps) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-teal-500">
        {number}
        <span className="text-lg">{suffix}</span>
      </div>
      <div className="text-sm md:text-base text-gray-600 mt-1">{label}</div>
    </div>
  );
}
