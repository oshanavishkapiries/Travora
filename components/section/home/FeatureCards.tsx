// ==================== FeatureCards Component Start ====================
"use client";

import React from "react";
import { Accessibility, Phone, Hospital } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureCardProps[] = [
  {
    icon: <Accessibility className="h-10 w-10 text-black" />, // 40px
    title: "Accessible Travel",
    description:
      "Wheelchair Accessible, Disability, Friendly, Barrier-Free Travel, Accessible, Step-Free Access.",
  },
  {
    icon: <Phone className="h-10 w-10 text-black" />,
    title: "Mobility & Support",
    description:
      "Mobility Assistance, 24/7 Support, Personal Aid, Communication Help, On-Call Guidance.",
  },
  {
    icon: <Hospital className="h-10 w-10 text-black" />,
    title: "Health & Safety",
    description:
      "Medical Support, Emergency Ready, Health Monitoring, Safe Environments, Trained Staff.",
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col items-center bg-white rounded-xl md:rounded-2xl shadow-sm p-6 md:p-8 text-center h-full">
    <div className="mb-6 flex items-center justify-center h-16 w-16 rounded-full bg-[#F7F7F7]">
      {icon}
    </div>
    <h3 className="mb-3 text-lg md:text-xl font-semibold text-black">
      {title}
    </h3>
    <p className="text-sm md:text-base text-[#666] md:text-[#777] font-normal leading-relaxed">
      {description}
    </p>
  </div>
);

const FeatureCards: React.FC = () => (
  <section className="w-full px-4 md:px-8 lg:px-0 max-w-6xl mx-auto mt-12 md:mt-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {features.map((feature, idx) => (
        <FeatureCard key={idx} {...feature} />
      ))}
    </div>
  </section>
);

export default FeatureCards;
// ==================== FeatureCards Component End ====================
