// ==================== Mock Attractions Start ====================
export type AttractionCategory =
  | "Beaches"
  | "Culture"
  | "Cities"
  | "Mountains"
  | "Leisure";

export interface AttractionItemMock {
  id: string;
  title: string;
  description: string;
  location: string;
  rating: number;
  category: AttractionCategory;
  imageUrl: string;
  galleryImages?: Array<{
    id: string;
    src: string;
    alt: string;
    location: string;
  }>;
}

export const ATTRACTIONS: AttractionItemMock[] = [
  {
    id: "1",
    title: "Sigiriya Rock Fortress",
    description: "Ancient rock citadel with breathtaking views.",
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
        alt: "Ancient Ruins",
        location: "Ancient City",
      },
      {
        id: "s3",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
        alt: "Mountain Views",
        location: "Mountain Peak",
      },
    ],
  },
  {
    id: "2",
    title: "Mirissa Beach",
    description: "Golden sands and serene turquoise waters.",
    location: "Mirissa, Sri Lanka",
    rating: 4.7,
    category: "Beaches",
    imageUrl:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Nine Arch Bridge",
    description:
      "Nestled in the misty hills of Ella, the Nine Arch Bridge stands as one of Sri Lanka's most photographed landmarks. Built during the British colonial era using only stone and brick, this 30-meter-high bridge stretches elegantly across a lush green valley with nine grand arches. Surrounded by tea plantations and tropical forest, it offers breath-taking views and a magical atmosphere, especially when the iconic blue train passes through.",
    location: "Ella, Sri Lanka",
    rating: 4.6,
    category: "Mountains",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      {
        id: "e1",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
        alt: "Nine Arch Bridge with blue train",
        location: "Nine Arch Bridge",
      },
      {
        id: "e2",
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
        alt: "Nine Arch Bridge from distance",
        location: "Ella Valley",
      },
      {
        id: "e3",
        src: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?q=80&w=800&auto=format&fit=crop",
        alt: "Nine Arch Bridge with red train",
        location: "Train Crossing",
      },
    ],
  },
  {
    id: "4",
    title: "Colombo City",
    description: "Vibrant streets, markets, and heritage spots.",
    location: "Colombo, Sri Lanka",
    rating: 4.4,
    category: "Cities",
    imageUrl:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Unawatuna Leisure",
    description: "Relaxed beach vibes and cozy cafes.",
    location: "Unawatuna, Sri Lanka",
    rating: 4.5,
    category: "Leisure",
    imageUrl:
      "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Kandy Cultural Triangle",
    description: "Temples, rituals, and rich traditions.",
    location: "Kandy, Sri Lanka",
    rating: 4.6,
    category: "Culture",
    imageUrl:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "7",
    title: "Galle Fort",
    description: "Historic fort with colonial architecture.",
    location: "Galle, Sri Lanka",
    rating: 4.7,
    category: "Culture",
    imageUrl:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "8",
    title: "Bentota Beach",
    description: "Pristine beaches and water sports.",
    location: "Bentota, Sri Lanka",
    rating: 4.5,
    category: "Beaches",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "9",
    title: "Nuwara Eliya",
    description: "Tea plantations and cool mountain air.",
    location: "Nuwara Eliya, Sri Lanka",
    rating: 4.4,
    category: "Mountains",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "10",
    title: "Jaffna City",
    description: "Northern charm and cultural heritage.",
    location: "Jaffna, Sri Lanka",
    rating: 4.3,
    category: "Cities",
    imageUrl:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "11",
    title: "Arugam Bay",
    description: "Surfing paradise and laid-back atmosphere.",
    location: "Arugam Bay, Sri Lanka",
    rating: 4.6,
    category: "Leisure",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "12",
    title: "Polonnaruwa",
    description: "Ancient ruins and archaeological wonders.",
    location: "Polonnaruwa, Sri Lanka",
    rating: 4.5,
    category: "Culture",
    imageUrl:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "13",
    title: "Hikkaduwa Beach",
    description: "Coral reefs and marine life.",
    location: "Hikkaduwa, Sri Lanka",
    rating: 4.4,
    category: "Beaches",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "14",
    title: "Anuradhapura",
    description: "Sacred city and Buddhist heritage.",
    location: "Anuradhapura, Sri Lanka",
    rating: 4.7,
    category: "Culture",
    imageUrl:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "15",
    title: "Trincomalee",
    description: "Natural harbor and pristine beaches.",
    location: "Trincomalee, Sri Lanka",
    rating: 4.3,
    category: "Cities",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop",
  },
];
// ==================== Mock Attractions End ====================
