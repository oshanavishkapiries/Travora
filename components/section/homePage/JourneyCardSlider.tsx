import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// -----------------
// Types
// -----------------
export type JourneyCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

// -----------------
// Single Card
// -----------------
function JourneyCard({ title, description, imageUrl }: JourneyCardProps) {
  return (
    <Card className="rounded-xl shadow-md overflow-hidden flex flex-col w-full pl-2">
      <CardContent className="flex flex-col sm:flex-row items-start justify-between p-6 gap-6 w-full">
        {/* Text */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 w-full sm:w-48 h-40 sm:h-32 relative rounded-md overflow-hidden">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
      </CardContent>
    </Card>
  );
}

// -----------------
// Slider Component
// -----------------
export default function JourneyCardSlider() {
  const [current, setCurrent] = React.useState(0);
  const cards: JourneyCardProps[] = [
    {
      title: "Your Journey Starts Here",
      description:
        "Discover the world’s most stunning destinations with curated tours, personalized plans, and unforgettable experiences designed just for you.",
      imageUrl: "https://shorturl.at/di3ge",
    },
    {
      title: "Adventure Awaits",
      description:
        "From mountains to beaches, experience thrilling adventures and create lifelong memories in breathtaking locations.",
      imageUrl: "https://shorturl.at/di3ge",
    },
    {
      title: "Relax & Unwind",
      description:
        "Escape the stress and indulge in serene getaways crafted to refresh your mind, body, and soul.",
      imageUrl: "https://shorturl.at/di3ge",
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [cards.length]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Cards container */}
      <div className="relative w-full px-4 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {cards.map((card, i) => (
            <div key={i} className="flex-shrink-0 w-full">
              <JourneyCard {...card} />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex gap-2 mt-4">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all",
              i === current ? "bg-gray-800" : "bg-gray-300"
            )}
          />
        ))}
      </div>
    </div>
  );
}
