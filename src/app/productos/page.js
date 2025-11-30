import ProductCard from '@/components/ProductCard';
import products from '@/data/products';

export default function ProductosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Nuestro Catálogo
        </h1>
        <p className="text-gray-600 text-lg">
          Explora nuestra colección completa de tazas térmicas premium
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
