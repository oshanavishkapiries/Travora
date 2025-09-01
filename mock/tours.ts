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
}

export const TOURS: TourItemMock[] = [
  {
    id: "1",
    title: "Sigiriya Rock Fortress",
    description: "Ancient rock citadel with breathtaking views.",
    location: "Dambulla, Sri Lanka",
    rating: 4.8,
    category: "Culture",
    imageUrl:
      "https://images.unsplash.com/photo-1628193826226-a7c781daa6c1?q=80&w=1600&auto=format&fit=crop",
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
];
// ==================== Mock Tours End ====================
