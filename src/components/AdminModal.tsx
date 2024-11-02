import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { Product } from '../data/products';

interface AdminModalProps {
  product: Product;
  onClose: () => void;
  onSave: (updatedProduct: Product) => void;
}

export default function AdminModal({ product, onClose, onSave }: AdminModalProps) {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Product</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={editedProduct.name}
                onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={editedProduct.description}
                onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {(['250g', '500g', '1kg'] as const).map((size) => (
                <div key={size}>
                  <label className="block text-sm font-medium text-gray-700">{size}</label>
                  <input
                    type="number"
                    value={editedProduct.prices[size]}
                    onChange={(e) => setEditedProduct({
                      ...editedProduct,
                      prices: {
                        ...editedProduct.prices,
                        [size]: Number(e.target.value)
                      }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}