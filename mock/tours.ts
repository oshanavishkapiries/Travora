// ==================== Mock Tours Start ====================
export type TourCategory =
  | "Beaches"
  | "Culture"
  | "Cities"
  | "Mountains"
  | "Leisure";

export interface TourItemMock {
  id: string;
  title: string;
  description: string;
  location: string;
  rating: number;
  category: TourCategory;
  imageUrl: string;
  galleryImages?: Array<{
    id: string;
    src: string;
    alt: string;
    location: string;
  }>;
}

export const TOURS: TourItemMock[] = [
  {
    id: "1",
    title: "Sigiriya Rock Fortress Tour",
    description: "Guided tour of ancient rock citadel with breathtaking views.",
    location: "Dambulla, Sri Lanka",
    rating: 4.8,
    category: "Culture",
    imageUrl:
      "https://images.unsplash.com/photo-1628193826226-a7c781daa6c1?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      {
        id: "s1",
        src: "https://images.unsplash.com/photo-1628193826226-a7c781daa6c1?q=80&w=800&auto=format&fit=crop",
        alt: "Sigiriya Rock Fortress",
        location: "Sigiriya",
      },
      {
        id: "s2",
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
        alt: "Dambulla Cave Temple",
        location: "Dambulla",
      },
      {
        id: "s3",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
        alt: "Ancient Ruins",
        location: "Ancient City",
      },
    ],
  },
  {
    id: "2",
    title: "Mirissa Beach Adventure",
    description: "Whale watching and beach activities.",
    location: "Mirissa, Sri Lanka",
    rating: 4.7,
    category: "Beaches",
    imageUrl:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      {
        id: "m1",
        src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop",
        alt: "Mirissa Beach",
        location: "Mirissa",
      },
      {
        id: "m2",
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        alt: "Hikkaduwa",
        location: "Hikkaduwa",
      },
      {
        id: "m3",
        src: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?q=80&w=800&auto=format&fit=crop",
        alt: "Unawatuna",
        location: "Unawatuna",
      },
    ],
  },
  {
    id: "3",
    title: "Ella Rock Trekking",
    description: "Scenic mountain trails and panoramic views.",
    location: "Ella, Sri Lanka",
    rating: 4.6,
    category: "Mountains",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      {
        id: "e1",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
        alt: "Ella Rock",
        location: "Ella Rock",
      },
      {
        id: "e2",
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
        alt: "Tea Plantations",
        location: "Tea Gardens",
      },
      {
        id: "e3",
        src: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?q=80&w=800&auto=format&fit=crop",
        alt: "Mountain Views",
        location: "Mountain Peak",
      },
    ],
  },
  {
    id: "4",
    title: "Colombo City Walk",
    description: "Vibrant streets, markets, and heritage spots.",
    location: "Colombo, Sri Lanka",
    rating: 4.4,
    category: "Cities",
    imageUrl:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Unawatuna Leisure Tour",
    description: "Relaxed beach vibes and cozy cafes.",
    location: "Unawatuna, Sri Lanka",
    rating: 4.5,
    category: "Leisure",
    imageUrl:
      "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Kandy Cultural Experience",
    description: "Temples, rituals, and rich traditions.",
    location: "Kandy, Sri Lanka",
    rating: 4.6,
    category: "Culture",
    imageUrl:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "7",
    title: "Galle Fort Heritage Tour",
    description: "Historic fort with colonial architecture.",
    location: "Galle, Sri Lanka",
    rating: 4.7,
    category: "Culture",
    imageUrl:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      {
        id: "g1",
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800&auto=format&fit=crop",
        alt: "Galle Fort aerial view",
        location: "Galle Fort",
      },
      {
        id: "g2",
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
        alt: "Galle Fort Street",
        location: "Galle Fort Street",
      },
      {
        id: "g3",
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        alt: "Mirissa Beach",
        location: "Mirissa",
      },
    ],
  },
  {
    id: "8",
    title: "Bentota Water Sports",
    description: "Pristine beaches and water sports.",
    location: "Bentota, Sri Lanka",
    rating: 4.5,
    category: "Beaches",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "9",
    title: "Nuwara Eliya Tea Tour",
    description: "Tea plantations and cool mountain air.",
    location: "Nuwara Eliya, Sri Lanka",
    rating: 4.4,
    category: "Mountains",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "10",
    title: "Jaffna Cultural Tour",
    description: "Northern charm and cultural heritage.",
    location: "Jaffna, Sri Lanka",
    rating: 4.3,
    category: "Cities",
    imageUrl:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "11",
    title: "Arugam Bay Surfing",
    description: "Surfing paradise and laid-back atmosphere.",
    location: "Arugam Bay, Sri Lanka",
    rating: 4.6,
    category: "Leisure",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "12",
    title: "Polonnaruwa Archaeological Tour",
    description: "Ancient ruins and archaeological wonders.",
    location: "Polonnaruwa, Sri Lanka",
    rating: 4.5,
    category: "Culture",
    imageUrl:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "13",
    title: "Hikkaduwa Marine Tour",
    description: "Coral reefs and marine life.",
    location: "Hikkaduwa, Sri Lanka",
    rating: 4.4,
    category: "Beaches",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "14",
    title: "Anuradhapura Sacred Tour",
    description: "Sacred city and Buddhist heritage.",
    location: "Anuradhapura, Sri Lanka",
    rating: 4.7,
    category: "Culture",
    imageUrl:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "15",
    title: "Trincomalee Harbor Tour",
    description: "Natural harbor and pristine beaches.",
    location: "Trincomalee, Sri Lanka",
    rating: 4.3,
    category: "Cities",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop",
  },
];
// ==================== Mock Tours End ====================
