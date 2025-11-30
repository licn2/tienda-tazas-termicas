import Image from 'next/image';
import Link from 'next/link';
import products from '@/data/products';
import AddToCartButton from './AddToCartButton';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductoDetalle({ params }) {
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Producto no encontrado</h1>
        <Link href="/productos/" className="text-primary-600 hover:text-primary-700">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link 
        href="/productos/"
        className="text-primary-600 hover:text-primary-700 mb-8 inline-flex items-center"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Volver a productos
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <div className="relative h-96 md:h-[600px] bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>

          <div className="flex items-center mb-6">
            <span className="text-4xl font-bold text-primary-600">
              €{product.price.toFixed(2)}
            </span>
            <span className="ml-4 text-gray-500">
              Stock: {product.stock} unidades
            </span>
          </div>

          <p className="text-gray-700 text-lg mb-8">
            {product.description}
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-800 mb-4">Especificaciones</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-gray-600 w-32">Capacidad:</span>
                <span className="font-medium">{product.capacity}</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 w-32">Material:</span>
                <span className="font-medium">{product.material}</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 w-32">Colores:</span>
                <span className="font-medium">{product.colors.join(', ')}</span>
              </li>
            </ul>
          </div>

          <AddToCartButton product={product} />

          <div className="mt-8 border-t pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Características</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Mantiene bebidas calientes hasta 6 horas
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Mantiene bebidas frías hasta 12 horas
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Apto para lavavajillas
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Libre de BPA
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Garantía de 2 años
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
