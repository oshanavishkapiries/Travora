// ==================== Tours Component Start ====================
"use client";

import React from "react";
import { MapPin, Star, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TOURS } from "@/mock/tours";
import { HOME_CATEGORIES } from "@/mock/categories";
import Link from "next/link";
import OptimizedImage from "@/components/common/OptimizedImage";

type Category =
  | "All"
  | "Beaches"
  | "Culture"
  | "Cities"
  | "Mountains"
  | "Leisure";

export interface TourItem {
  id: string;
  title: string;
  description: string;
  location: string;
  rating: number; // 0-5
  category: Exclude<Category, "All">;
  imageUrl: string;
}

interface ToursProps {
  items?: TourItem[];
}

const DEFAULT_ITEMS: TourItem[] = TOURS;

const CATEGORIES: Category[] = HOME_CATEGORIES as unknown as Category[];

function RatingBadge({ rating }: { rating: number }) {
  return (
    <div className="absolute left-3 bottom-3 inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
      <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
      {rating.toFixed(1)}
    </div>
  );
}

function TourCard({ item }: { item: TourItem }) {
  return (
    <Link href={`/explore/tours/${item.id}`}>
      <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md cursor-pointer">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <OptimizedImage
            src={item.imageUrl}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            containerClassName="h-full w-full"
          />
          <RatingBadge rating={item.rating} />
          <div className="absolute right-3 top-3 rounded-full bg-white p-2 text-black shadow-sm ring-1 ring-black/5">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <div className="space-y-3 p-4">
          <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">
            {item.title}
          </h3>
          <p className="line-clamp-2 text-sm text-gray-600">
            {item.description}
          </p>
          <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-3">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <MapPin className="h-4 w-4" />
              <span className="line-clamp-1">{item.location}</span>
            </div>
            <Button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Tourplanes({ items = DEFAULT_ITEMS }: ToursProps) {
  const [active, setActive] = React.useState<Category>("All");
  const [visibleCount, setVisibleCount] = React.useState(6);

  const filtered = React.useMemo(() => {
    if (active === "All") return items;
    return items.filter((i) => i.category === active);
  }, [active, items]);

  const toShow = filtered.slice(0, visibleCount);
  const canLoadMore = visibleCount < filtered.length;

  return (
    <section className="w-full px-4 md:px-8 lg:px-0 max-w-6xl mx-auto mt-16 md:mt-24">
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:mb-6 md:text-4xl">
        Tours
      </h2>
      {/* Filter Bar */}
      <div className="mb-8 flex flex-wrap items-center justify-start gap-2 md:gap-3">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => {
              setActive(c);
              setVisibleCount(6);
            }}
            className={
              "rounded-full border px-4 py-2 text-sm transition-colors shadow-sm " +
              (active === c
                ? "border-black bg-black text-white"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50")
            }
            aria-pressed={active === c}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
        {toShow.map((item) => (
          <TourCard key={item.id} item={item} />
        ))}
      </div>

      {/* Load More / Explore More */}
      <div className="mt-8 flex justify-center sm:justify-end">
        {canLoadMore ? (
          <Button
            onClick={() => setVisibleCount((c) => c + 6)}
            className="w-full rounded-full bg-black px-6 text-white hover:bg-black/90 sm:w-auto"
          >
            Load More
          </Button>
        ) : (
          <Link href="/explore/tours">
            <Button
              variant="outline"
              className="rounded-full border-blue-600 bg-white px-6 text-blue-600 hover:bg-blue-50"
            >
              Explore More
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
}

// ==================== Tours Component End ====================
