// ==================== Gallery Component Start ====================
"use client";

import React from "react";
import OptimizedImage from "@/components/common/OptimizedImage";
import { MapPin, Phone, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GALLERY_ITEMS } from "@/mock/gallery";

type GalleryItem = {
  id: string;
  src: string;
  location: string;
};

const ITEMS: GalleryItem[] = GALLERY_ITEMS;

function Tile({ item, className }: { item: GalleryItem; className?: string }) {
  return (
    <div
      className={"relative overflow-hidden rounded-2xl " + (className ?? "")}
    >
      <OptimizedImage
        src={item.src}
        alt={item.location}
        className="h-full w-full object-cover"
        containerClassName="h-full w-full"
      />
      <div className="pointer-events-none absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[8px] md:text-[11px] font-medium text-white backdrop-blur">
        <MapPin className="h-3 w-3 md:h-4 md:w-4" /> {item.location}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="w-full px-[20px] md:px-20 mt-10 md:mt-20 flex flex-col gap-10 md:gap-20">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:mb-6 md:text-4xl">
        Gallery
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-12 grid-rows-12 gap-4 md:grid-cols-6 md:grid-rows-6 md:gap-6 lg:grid-cols-12 lg:grid-rows-12 h-[650px] md:h-[800px] lg:h-[1200px]">
        {/* Row 1 */}
        <Tile
          item={ITEMS[0]} // fisherman (Hikkaduwa)
          className="col-span-6 row-span-3 md:col-span-4 md:row-span-2 lg:col-span-8 lg:row-span-4"
        />
        <Tile
          item={ITEMS[1]} // turtle underwater
          className="col-span-6 row-span-3 md:col-span-2 md:row-span-4 lg:col-span-4 lg:row-span-8"
        />

        {/* Row 2 */}
        <Tile
          item={ITEMS[2]} // deer desert
          className="col-span-12 row-span-3 md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-4"
        />
        <Tile
          item={ITEMS[3]} // pink blossom trees
          className="col-span-6 row-span-3 md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-4"
        />
        <Tile
          item={ITEMS[4]} // Yosemite forest
          className="col-span-6 row-span-6 md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-4"
        />

        {/* Row 3 */}
        <Tile
          item={ITEMS[5]} // green hills landscape
          className="col-span-6 row-span-3 md:col-span-4 md:row-span-2 lg:col-span-8 lg:row-span-4"
        />
      </div>

      <div className="flex justify-center">
        <Button className="w-1/3 sm:w-full max-w-xs rounded-full bg-black text-white text-xs sm:text-2xl hover:bg-black/90 md:max-w-md h-8 md:h-20">
          <PhoneCall className="mr-2" />
          Call Us Now
        </Button>
      </div>
    </section>
  );
}

// ==================== Gallery Component End ====================
