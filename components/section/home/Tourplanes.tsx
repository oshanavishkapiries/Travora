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
          <div className="absolute right-3 top-3 rounded-full bg-white p-2 text-black shadow-sm ring-1 ring-black/5 hidden sm:block">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <div className="space-y-3 p-2.5 md:p-6 flex flex-col justify-between h-[116px] sm:h-[154px] md:h-[196px]">
          <div className="space-y-3 h-full align-middle">
            <h3 className="line-clamp-1 text-xs sm:text-[20px] font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="line-clamp-2 text-[10px] sm:text-base text-gray-600">
              {item.description}
            </p>
          </div>
          <div>
            <hr className="hidden md:block" />
            <div className=" mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] sm:text-base text-gray-700">
                <MapPin className="h-2.5 sm:h-4 w-2.5 sm:w-4" />
                <span className="line-clamp-1">{item.location}</span>
              </div>
              <Button className="hidden md:flex rounded-[8px] bg-blue-600 px-4 py-2 text-lg font-medium text-white hover:bg-blue-700">
                View Details
              </Button>
            </div>
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
    <section className="w-full px-[20px] md:px-20 mt-10 md:mt-20">
      <div className="flex flex-col gap-6 md:gap-20 ">
        <h2 className="mb-4 text-xl md:text-[40px] font-bold tracking-tight text-gray-900 md:mb-6 md:text-4xl">
          Tours
        </h2>
        <div className="flex flex-col gap-6">
          {/* Filter Bar */}
          <div className="hidden sm:flex flex-wrap items-center justify-start gap-2.5">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setActive(c);
                  setVisibleCount(6);
                }}
                className={
                  "rounded-full px-6 py-2 text-base" +
                  (active === c
                    ? "border-black bg-black text-white"
                    : "border-gray-300 bg-[#FAFAFA] text-gray-700 hover:bg-gray-50")
                }
                aria-pressed={active === c}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 justify-between">
            {toShow.map((item) => (
              <TourCard key={item.id} item={item} />
            ))}
          </div>

          {/* Load More / Explore More */}
          <div className="flex justify-center sm:justify-end">
            {canLoadMore ? (
              <Button
                onClick={() => setVisibleCount((c) => c + 6)}
                className="w-full rounded-[6px] bg-black px-6 text-white hover:bg-black/90 sm:w-auto text-[10px] sm:text-base"
              >
                Load More
              </Button>
            ) : (
              <Link href="/explore/attractions">
                <Button
                  variant="outline"
                  className=" rounded-[6px] border-blue-600 bg-white px-6 text-blue-600 hover:bg-blue-50"
                >
                  Explore More
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== Tours Component End ====================
