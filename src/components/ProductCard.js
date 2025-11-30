'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const addToCart = () => {
    if (typeof window !== 'undefined') {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingItem = cart.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      
      localStorage.setItem('cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('cartUpdated'));
      
      // Show notification
      alert(`${product.name} agregado al carrito!`);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">{product.capacity}</span>
          <span className="text-sm text-gray-500">{product.material}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-600">
            €{product.price.toFixed(2)}
          </span>
          
          <button
            onClick={addToCart}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Agregar</span>
          </button>
        </div>
        
        <div className="mt-4">
          <Link 
            href={`/productos/${product.id}/`}
            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            Ver detalles →
          </Link>
        </div>
      </div>
    </div>
  );
}
