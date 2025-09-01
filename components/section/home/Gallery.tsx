// ==================== Gallery Component Start ====================
"use client";

import React from "react";
import { MapPin, Phone } from "lucide-react";
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
      <img
        src={item.src}
        alt={item.location}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
        <MapPin className="h-3 w-3" /> {item.location}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-0 max-w-6xl mx-auto mt-16 md:mt-24">
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:mb-6 md:text-4xl">
        Gallery
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-6 lg:grid-cols-12">
        {/* Row 1 */}
        <Tile
          item={ITEMS[0]}
          className="col-span-2 aspect-[16/10] md:col-span-4 lg:col-span-8"
        />
        <Tile
          item={ITEMS[2]}
          className="col-span-2 aspect-[4/5] md:col-span-2 md:aspect-[3/4] lg:col-span-4"
        />

        {/* Row 2 */}
        <Tile
          item={ITEMS[3]}
          className="col-span-1 aspect-square md:col-span-2"
        />
        <Tile
          item={ITEMS[5]}
          className="col-span-1 aspect-square md:col-span-2"
        />
        <Tile
          item={ITEMS[1]}
          className="col-span-2 aspect-[16/10] md:col-span-2 md:aspect-[4/3]"
        />

        {/* Row 3 */}
        <Tile
          item={ITEMS[6]}
          className="col-span-2 aspect-[4/3] md:col-span-2"
        />
        <Tile
          item={ITEMS[7]}
          className="col-span-2 aspect-[16/9] md:col-span-4"
        />
      </div>

      <div className="mt-8 flex justify-center">
        <Button className="w-full max-w-xs rounded-full bg-black text-white hover:bg-black/90 md:max-w-md">
          <Phone className="mr-2 h-4 w-4" />
          Call Us Now
        </Button>
      </div>
    </section>
  );
}

// ==================== Gallery Component End ====================
