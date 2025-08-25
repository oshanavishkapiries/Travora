"use client";

import AttractionsSection, { demoAttractions } from "@/components/section/homePage/AttractionsSection";
import JourneyCardSlider from "@/components/section/homePage/JourneyCardSlider";
import TravelHero from "@/components/section/homePage/TravelHero";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();


  return (
    <>
      <TravelHero
        heroImageUrl="https://shorturl.at/uMsKx"
        onCta={() => router.push('/get-started')}
        title={
          <>
            <span>Travel memories</span>
            <br /> you’ll never forget
          </>
        }
      />
      <JourneyCardSlider />
      <AttractionsSection
        className="px-4"
        items={demoAttractions}
        seeMoreHref="/attractions"
        onToggleSave={(id, next) => console.log({ id, next })}
      />
    </>
  );
}
