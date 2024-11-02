export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  prices: {
    '250g': number;
    '500g': number;
    '1kg': number;
  };
  category: 'pickle' | 'snack';
}

export const products: Product[] = [
  {
    id: 'mango-pickle',
    name: 'Traditional Mango Pickle',
    description:
      'Tangy and spicy authentic mango pickle made with premium mangoes',
    image:
      'https://images.unsplash.com/photos/a-group-of-vegetables-and-fruits-_H7_C7MePts?auto=format&fit=crop&q=80&w=800',
    prices: {
      '250g': 149,
      '500g': 279,
      '1kg': 499,
    },
    category: 'pickle',
  },
  {
    id: 'lemon-pickle',
    name: 'Zesty Lemon Pickle',
    description: 'Mouth-watering lemon pickle with aromatic spices',
    image:
      'https://images.unsplash.com/photo-1584535556333-3915309501e1?auto=format&fit=crop&q=80&w=800',
    prices: {
      '250g': 129,
      '500g': 239,
      '1kg': 439,
    },
    category: 'pickle',
  },
  {
    id: 'Chicken-pickle',
    name: 'Chicken Pickle',
    description:
      'A deliciously tangy and spicy Indian condiment made from marinated chicken pieces.This pickle is uniquely savory, sour, and spicy, balancing intense flavors that pair perfectly with rice, parathas, or various Indian dishes. With each bite, you’ll enjoy the rich layers of flavor that make chicken pickle a favorite for those who love bold, preserved foods.',
    image:
      'https://images.unsplash.com/photo-1564894809611-1742fc40ed80?auto=format&fit=crop&q=80&w=800',
    prices: {
      '250g': 169,
      '500g': 299,
      '1kg': 549,
    },
    category: 'pickle',
  },
  {
    id: 'garlic-pickle',
    name: 'Spicy Garlic Pickle',
    description: 'Flavorful garlic pickle perfect with any meal',
    image:
      'https://images.unsplash.com/photo-1564894809611-1742fc40ed80?auto=format&fit=crop&q=80&w=800',
    prices: {
      '250g': 179,
      '500g': 319,
      '1kg': 589,
    },
    category: 'pickle',
  },
  {
    id: 'chili-pickle',
    name: 'Hot Green Chili Pickle',
    description: 'Fiery green chili pickle for spice lovers',
    image:
      'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?auto=format&fit=crop&q=80&w=800',
    prices: {
      '250g': 159,
      '500g': 289,
      '1kg': 529,
    },
    category: 'pickle',
  },
];
