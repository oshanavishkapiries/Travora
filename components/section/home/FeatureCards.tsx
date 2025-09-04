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
    icon: <Accessibility className="h-4 w-4 sm:h-10 sm:w-10 text-black" />, // 40px
    title: "Accessible Travel",
    description:
      "Wheelchair Accessible, Disability, Friendly, Barrier-Free Travel, Accessible, Step-Free Access.",
  },
  {
    icon: <Phone className="h-4 w-4 sm:h-10 sm:w-10 text-black" />,
    title: "Mobility & Support",
    description:
      "Mobility Assistance, 24/7 Support, Personal Aid, Communication Help, On-Call Guidance.",
  },
  {
    icon: <Hospital className="h-4 w-4 sm:h-10 sm:w-10 text-black" />,
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
  <div className="flex flex-col items-center bg-white rounded-xl md:rounded-2xl shadow-[0_0_20px_0_rgba(0,0,1,0.1)] p-6 md:p-8 text-center h-full max-w-[410px] max-h-[300px]">
    <div className="mb-6 flex items-center justify-center h-6 w-6 sm:h-16 sm:w-16 rounded-full bg-[#ECECEC]">
      {icon}
    </div>
    <h3 className="mb-3 text-xs sm:text-lg md:text-xl font-semibold text-black">
      {title}
    </h3>
    <p className=" hidden lg:block text-sm md:text-base text-[#666] md:text-[#777] font-normal leading-relaxed">
      {description}
    </p>
  </div>
);

const FeatureCards: React.FC = () => (
  <section className="w-full px-[20px] md:px-20 py-12 md:py-20 max-w-screen">
    <div className="grid grid-cols-3 gap-2 md:gap-8 justify-items-center ">
      {features.map((feature, idx) => (
        <FeatureCard key={idx} {...feature} />
      ))}
    </div>
  </section>
);

export default FeatureCards;
// ==================== FeatureCards Component End ====================
