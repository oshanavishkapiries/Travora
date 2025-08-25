import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bookmark, ChevronRight } from "lucide-react";

// ---------- Types ----------
export type Attraction = {
    id: string;
    title: string;
    subtitle?: string; // e.g., city or region
    locationLabel: string; // e.g., province / state
    imageSrc: string;
    imageAlt: string;
    excerpt: string;
    saved?: boolean;
};

export type AttractionsSectionProps = {
    title?: string;
    seeMoreHref?: string;
    items: Attraction[];
    onToggleSave?: (id: string, next: boolean) => void;
    className?: string;
};

// ---------- Card Component ----------
function AttractionCard({
    item,
    onToggleSave,
}: {
    item: Attraction;
    onToggleSave?: (id: string, next: boolean) => void;
}) {
    const [saved, setSaved] = React.useState<boolean>(Boolean(item.saved));

    const toggle = React.useCallback(() => {
        setSaved((prev) => {
            const next = !prev;
            onToggleSave?.(item.id, next);
            return next;
        });
    }, [item.id, onToggleSave]);

    return (
        <Card className="group relative overflow-hidden rounded-2xl border-none shadow-lg transition-shadow hover:shadow-xl">
            <div className="relative">
                <div className="aspect-[4/3] w-full overflow-hidden">
                    <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        priority={false}
                    />
                </div>

                {/* Save button */}
                <button
                    aria-label={saved ? "Unsave" : "Save"}
                    onClick={toggle}
                    className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur transition hover:bg-white"
                >
                    <Bookmark
                        className={`h-5 w-5 ${saved ? "fill-current text-black" : "text-neutral-800"}`}
                    />
                </button>
            </div>

            <CardContent className="p-5 sm:p-6">
                <div className="mb-3 text-[10px] font-medium tracking-widest text-neutral-500">
                    {item.locationLabel}
                </div>

                <h3 className="text-lg font-semibold leading-snug text-neutral-900">
                    {item.title}
                </h3>
                {item.subtitle ? (
                    <div className="text-lg font-semibold leading-snug text-neutral-900">
                        {item.subtitle}
                    </div>
                ) : null}

                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-neutral-600">
                    {item.excerpt}
                </p>

                {/* CTA */}
                <div className="mt-5 flex justify-end">
                    <Button
                        size="icon"
                        aria-label="Open"
                        className="h-10 w-10 rounded-full bg-emerald-500 text-white shadow-md hover:bg-emerald-600"
                        asChild
                    >
                        <Link href="#">
                            <ChevronRight className="h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

// ---------- Section Component ----------
export default function AttractionsSection({
    title = "ATTRACTIONS",
    seeMoreHref = "#",
    items,
    onToggleSave,
    className,
}: AttractionsSectionProps) {
    return (
        <section className={className}>
            <div className="mb-6 flex items-baseline justify-between gap-4">
                <h2 className="text-2xl font-extrabold tracking-wide text-neutral-900">
                    {title}
                </h2>
                {seeMoreHref ? (
                    <Link
                        href={seeMoreHref}
                        className="text-sm font-medium text-neutral-600 underline-offset-4 transition hover:text-neutral-900 hover:underline"
                    >
                        see more
                    </Link>
                ) : null}
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((it) => (
                    <AttractionCard key={it.id} item={it} onToggleSave={onToggleSave} />
                ))}
            </div>
        </section>
    );
}

// ---------- Example Usage (remove in prod if you supply data from API) ----------
// The component can be imported and rendered like so:
// <AttractionsSection items={demoAttractions} seeMoreHref="/attractions" />

export const demoAttractions: Attraction[] = [
    {
        id: "1",
        title: "Fortress of Louisbourg\nNational Historic Site",
        locationLabel: "CAPE BRETON ISLAND",
        imageSrc: "https://shorturl.at/uMsKx",
        imageAlt: "Fortress of Louisbourg",
        excerpt:
            "The fortunes of the province that became Nova Scotia are inextricably bound up with this mighty fortress, built by the…",
        saved: false,
    },
    {
        id: "2",
        title: "Alexander Graham Bell\nNational Historic Site",
        locationLabel: "HALIFAX",
        imageSrc: "https://shorturl.at/uMsKx",
        imageAlt: "Alexander Graham Bell Museum",
        excerpt:
            "Telecommunications pioneer and inventor Alexander Graham Bell fell in love with Bras d'Or during a family holiday — apparently the…",
        saved: true,
    },
    {
        id: "3",
        title: "Citadel Hill National\nHistoric Site",
        locationLabel: "NOVA SCOTIA",
        imageSrc: "https://shorturl.at/uMsKx",
        imageAlt: "Citadel Hill",
        excerpt:
            "Perched atop the grassy hill, the star‑shaped fort played a key role in Halifax's defense and history.",
        saved: false,
    },
];
