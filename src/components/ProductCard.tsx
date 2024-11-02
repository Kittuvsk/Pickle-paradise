import React, { useState } from 'react';
import { Edit2, ShoppingCart } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  isAdmin?: boolean;
  onEdit?: (product: Product) => void;
}

export default function ProductCard({
  product,
  isAdmin,
  onEdit,
}: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<'250g' | '500g' | '1kg'>(
    '500g'
  );

  const handleOrder = () => {
    const message = encodeURIComponent(
      `Hi! I would like to order:\n\n` +
        `Product: ${product.name}\n` +
        `Size: ${selectedSize}\n` +
        `Price: ₹${product.prices[selectedSize]}\n\n` +
        `Please provide delivery details.`
    );
    window.open(`https://wa.me/+918008404693?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {isAdmin && (
          <button
            onClick={() => onEdit?.(product)}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <Edit2 className="w-4 h-4 text-gray-600" />
          </button>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="mt-1 text-gray-600 text-sm">{product.description}</p>

        <div className="mt-4">
          <div className="flex gap-2 mb-3">
            {(['250g', '500g', '1kg'] as const).map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 rounded ${
                  selectedSize === size
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-green-600">
              ₹{product.prices[selectedSize]}
            </span>
            <button
              onClick={handleOrder}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
