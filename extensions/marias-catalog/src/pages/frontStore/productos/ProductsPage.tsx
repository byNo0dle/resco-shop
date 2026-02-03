import React from 'react';

// Types for products from Evershop
interface ProductImage {
  url: string;
  alt?: string;
}

interface ProductPrice {
  regular: {
    value: number;
    text: string;
  };
  special?: {
    value: number;
    text: string;
  };
}

interface Product {
  productId: number;
  uuid: string;
  name: string;
  sku: string;
  price: ProductPrice;
  image?: ProductImage;
  url: string;
  inventory?: {
    isInStock: boolean;
  };
}

// ============================================
// HEADER COMPONENT
// ============================================
function Header() {
  return (
    <header className="w-full px-20 py-5 flex items-center justify-between" style={{ backgroundColor: '#f0ece9' }}>
      <a href="/" className="flex flex-col">
        <span
          className="text-2xl font-bold tracking-wider"
          style={{ fontFamily: 'Playfair Display, serif', color: '#647257' }}
        >
          MARIA'S MEAT MARKET
        </span>
        <span
          className="text-xs tracking-widest"
          style={{ fontFamily: 'sans-serif', color: '#647257' }}
        >
          DISTRIBUIDORA DE CARNES
        </span>
      </a>

      <nav className="flex items-center gap-12">
        {['HOME', 'COMPRAR', 'NUESTRA CARNE', 'SOSTENIBILIDAD', 'CONTACTO'].map((item, index) => (
          <a
            key={item}
            href={item === 'HOME' ? '/' : item === 'COMPRAR' ? '/productos' : `/#${item.toLowerCase().replace(' ', '-')}`}
            className={`text-xs tracking-wide transition-opacity hover:opacity-70 ${index === 1 ? 'font-semibold underline' : 'font-medium'}`}
            style={{ fontFamily: 'sans-serif', color: '#647257' }}
          >
            {item}
          </a>
        ))}
      </nav>

      <a href="/cart" className="hover:opacity-70 transition-opacity">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#647257" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </a>
    </header>
  );
}

// ============================================
// PRODUCT CARD COMPONENT
// ============================================
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col gap-4 w-72">
      <a href={product.url} className="block overflow-hidden group">
        <div
          className="w-full h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundImage: product.image?.url
              ? `url("${product.image.url}")`
              : 'url("https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400")'
          }}
        />
      </a>

      <div className="flex flex-col items-center gap-2">
        <a href={product.url}>
          <h3
            className="text-lg font-semibold tracking-wide text-center hover:opacity-70 transition-opacity"
            style={{ fontFamily: 'Playfair Display, serif', color: '#647257' }}
          >
            {product.name.toUpperCase()}
          </h3>
        </a>

        <div className="flex items-center gap-3">
          {product.price.special ? (
            <>
              <span className="text-sm line-through" style={{ color: '#9a9a8a' }}>
                {product.price.regular.text}
              </span>
              <span className="text-sm" style={{ color: '#7a8a6d' }}>
                {product.price.special.text}
              </span>
            </>
          ) : (
            <span className="text-sm" style={{ color: '#7a8a6d' }}>
              {product.price.regular.text}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 mt-2">
          <a
            href={product.url}
            className="px-6 py-2 text-xs font-medium tracking-wide border transition-all hover:bg-opacity-10"
            style={{ borderColor: '#647257', color: '#647257' }}
          >
            VER DETALLE
          </a>
          <button className="hover:opacity-70 transition-opacity" onClick={() => { window.location.href = product.url; }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#647257" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// FOOTER COMPONENT
// ============================================
function Footer() {
  return (
    <footer className="w-full py-10 px-20 flex justify-between items-center" style={{ backgroundColor: '#647257' }}>
      <span className="text-sm" style={{ fontFamily: 'Playfair Display, serif', color: '#f0ece9' }}>
        MARIA'S MEAT MARKET
      </span>
      <span className="text-xs opacity-50" style={{ color: '#f0ece9' }}>
        © 2024 Maria's Meat Market. Todos los derechos reservados.
      </span>
    </footer>
  );
}

// ============================================
// MAIN PRODUCTS PAGE COMPONENT
// ============================================
interface ProductsPageProps {
  products?: {
    items: Product[];
    total: number;
  };
}

export default function ProductsPage({ products }: ProductsPageProps) {
  const productItems = products?.items || [];

  return (
    <div className="w-full min-h-screen flex flex-col" style={{ backgroundColor: '#f0ece9' }}>
      <Header />

      <main className="flex-1 py-16 px-20">
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="text-xs font-semibold tracking-widest" style={{ color: '#647257' }}>
            CATALOGO
          </span>
          <h1 className="text-5xl" style={{ fontFamily: 'Playfair Display, serif', color: '#647257' }}>
            Nuestros Productos
          </h1>
          <p className="text-base text-center max-w-xl" style={{ color: '#7a8a6d' }}>
            Descubre nuestra seleccion de carnes premium, cuidadosamente seleccionadas para los paladares mas exigentes.
          </p>
        </div>

        {productItems.length > 0 ? (
          <div className="flex justify-center gap-8 flex-wrap">
            {productItems.map((product) => (
              <ProductCard key={product.productId} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 py-20">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#647257" strokeWidth="1" opacity="0.5">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
            </svg>
            <p className="text-lg text-center" style={{ color: '#7a8a6d' }}>
              Proximamente agregaremos nuestros productos.
            </p>
            <p className="text-sm text-center opacity-70" style={{ color: '#7a8a6d' }}>
              Mientras tanto, contactanos para conocer nuestro catalogo.
            </p>
            <a href="/#contacto" className="px-8 py-3 text-xs font-semibold tracking-wide transition-opacity hover:opacity-90" style={{ backgroundColor: '#647257', color: '#f0ece9' }}>
              CONTACTAR
            </a>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export const query = `
  query Query {
    products(filters: [{key: "limit", operation: eq, value: "50"}]) {
      items {
        ...Product
      }
      total
    }
  }
`;

export const fragments = `
  fragment Product on Product {
    productId
    uuid
    name
    sku
    price {
      regular {
        value
        text
      }
      special {
        value
        text
      }
    }
    image {
      url
      alt
    }
    url
    inventory {
      isInStock
    }
  }
`;

export const layout = {
  areaId: 'content',
  sortOrder: 5
};
