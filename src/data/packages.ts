export interface Package {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  image: string;
  recommended?: boolean;
}

export const packages: Package[] = [
  {
    id: "essential",
    title: "Essential Package",
    price: "$750",
    description: "Perfect for intimate gatherings and small celebrations",
    features: [
      "1 Professional Bartender",
      "4 Hours of Service",
      "Basic Bar Setup",
      "2 Signature Cocktails",
      "Ice & Mixers Management",
      "Basic Glassware"
    ],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1024"
  },
  {
    id: "premium",
    title: "Premium Package",
    price: "$1,250",
    description: "Ideal for medium-sized events with elevated service",
    features: [
      "2 Professional Bartenders",
      "6 Hours of Service",
      "Full Bar Setup",
      "4 Signature Cocktails",
      "Premium Mixers & Garnishes",
      "Complete Glassware Set",
      "Mobile Bar Station"
    ],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1024",
    recommended: true
  },
  {
    id: "luxury",
    title: "Luxury Package",
    price: "$2,500",
    description: "The ultimate experience for large-scale events",
    features: [
      "3 Professional Bartenders",
      "8 Hours of Service",
      "Deluxe Bar Setup",
      "6 Custom Signature Cocktails",
      "Top-Shelf Mixers & Exotic Garnishes",
      "Premium Glassware Collection",
      "2 Mobile Bar Stations",
      "Champagne Service",
      "Dedicated Event Coordinator"
    ],
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=1024"
  }
];