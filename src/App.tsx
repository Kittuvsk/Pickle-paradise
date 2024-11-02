import React, { useState } from 'react';
import { products as initialProducts } from './data/products';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import AdminModal from './components/AdminModal';
import type { Product } from './data/products';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleProductEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleProductSave = (updatedProduct: Product) => {
    setProducts(products.map(p => 
      p.id === updatedProduct.id ? updatedProduct : p
    ));
    setEditingProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        isAdmin={isAdmin} 
        onToggleAdmin={() => setIsAdmin(!isAdmin)} 
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isAdmin={isAdmin}
              onEdit={handleProductEdit}
            />
          ))}
        </div>
      </main>

      {editingProduct && (
        <AdminModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSave={handleProductSave}
        />
      )}
    </div>
  );
}

export default App;