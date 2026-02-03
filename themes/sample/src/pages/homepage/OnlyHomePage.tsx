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
    <header className="w-full px-20 py-5 flex items-center justify-between" style={{ backgroundColor: '#eae5cd' }}>
      {/* Logo */}
      <div className="flex flex-col">
        <span
          className="text-2xl font-bold tracking-wider"
          style={{ fontFamily: 'Playfair Display, serif', color: '#12362a' }}
        >
          MARIA'S MEAT MARKET
        </span>
        <span
          className="text-xs tracking-widest"
          style={{ fontFamily: 'sans-serif', color: '#12362a' }}
        >
          DISTRIBUIDORA DE CARNES
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-12">
        {['HOME', 'COMPRAR', 'NUESTRA CARNE', 'SOSTENIBILIDAD', 'CONTACTO'].map((item, index) => (
          <a
            key={item}
            href={item === 'HOME' ? '/' : item === 'COMPRAR' ? '/productos' : `#${item.toLowerCase().replace(' ', '-')}`}
            className={`text-xs tracking-wide transition-opacity hover:opacity-70 ${index === 1 ? 'font-semibold underline' : 'font-medium'}`}
            style={{ fontFamily: 'sans-serif', color: '#12362a' }}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Cart Icon */}
      <a href="/cart" className="hover:opacity-70 transition-opacity">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#12362a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </a>
    </header>
  );
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section
      className="w-full flex items-center gap-16 px-20 py-20"
      style={{ backgroundColor: '#eae5cd', minHeight: '600px' }}
    >
      {/* Content */}
      <div className="flex-1 flex flex-col gap-8">
        <span
          className="text-xs font-semibold tracking-widest"
          style={{ color: '#12362a' }}
        >
          CALIDAD PREMIUM
        </span>
        <h1
          className="text-6xl leading-tight"
          style={{ fontFamily: 'Playfair Display, serif', color: '#12362a' }}
        >
          Carnes de Alta<br />
          Calidad para<br />
          Paladares Exigentes
        </h1>
        <p
          className="text-base leading-relaxed max-w-md"
          style={{ color: '#7a8a6d' }}
        >
          Distribuidora de carnes premium para restaurantes y hogares de alto
          estandar. Seleccionamos los mejores cortes con dedicacion artesanal.
        </p>
        <a
          href="/productos"
          className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold tracking-wide transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#12362a', color: '#eae5cd' }}
        >
          VER PRODUCTOS
        </a>
      </div>

      {/* Hero Image */}
      <div
        className="flex-1 h-96 bg-cover bg-center rounded-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=800")',
          minHeight: '450px'
        }}
      />
    </section>
  );
}

// ============================================
// PRODUCT CARD COMPONENT
// ============================================
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col gap-4 w-72">
      {/* Product Image */}
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

      {/* Product Info */}
      <div className="flex flex-col items-center gap-2">
        <a href={product.url}>
          <h3
            className="text-lg font-semibold tracking-wide text-center hover:opacity-70 transition-opacity"
            style={{ fontFamily: 'Playfair Display, serif', color: '#12362a' }}
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

        {/* Actions */}
        <div className="flex items-center gap-4 mt-2">
          <a
            href={product.url}
            className="px-6 py-2 text-xs font-medium tracking-wide border transition-all hover:bg-opacity-10"
            style={{ borderColor: '#12362a', color: '#12362a' }}
          >
            INFO
          </a>
          <button
            className="hover:opacity-70 transition-opacity"
            onClick={() => {
              // Add to cart logic would go here
              window.location.href = product.url;
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#12362a"
              strokeWidth="2"
            >
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
// PRODUCTS SECTION
// ============================================
function ProductsSection({ products }: { products: Product[] }) {
  // Use the first 4 products or fallback to placeholder products
  const displayProducts = products.length > 0
    ? products.slice(0, 4)
    : [
        { productId: 1, uuid: '1', name: 'Freedom Burger', sku: 'FB001', price: { regular: { value: 23500, text: '23,500' } }, url: '/productos', image: { url: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400' } },
        { productId: 2, uuid: '2', name: 'Lomo Alto', sku: 'LA001', price: { regular: { value: 28000, text: '28,000' } }, url: '/productos', image: { url: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400' } },
        { productId: 3, uuid: '3', name: 'Adoquines Cadera', sku: 'AC001', price: { regular: { value: 23500, text: '23,500' } }, url: '/productos', image: { url: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=400' } },
        { productId: 4, uuid: '4', name: 'Lomo Fino', sku: 'LF001', price: { regular: { value: 78000, text: '78,000' } }, url: '/productos', image: { url: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?w=400' } },
      ] as Product[];

  return (
    <section
      className="w-full py-20 px-20 flex flex-col items-center gap-12"
      style={{ backgroundColor: '#eae5cd' }}
    >
      {/* Section Title */}
      <div className="flex items-center gap-4">
        <h2
          className="text-4xl"
          style={{ fontFamily: 'Playfair Display, serif', color: '#12362a' }}
        >
          NUESTROS
        </h2>
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#12362a"
          strokeWidth="2"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
        </svg>
        <h2
          className="text-4xl"
          style={{ fontFamily: 'Playfair Display, serif', color: '#12362a' }}
        >
          PRODUCTOS
        </h2>
      </div>

      {/* Products Grid */}
      <div className="flex justify-center gap-6 flex-wrap">
        {displayProducts.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>

      {/* Carousel Dots */}
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#12362a' }}></span>
        <span className="w-2 h-2 rounded-full opacity-30" style={{ backgroundColor: '#12362a' }}></span>
        <span className="w-2 h-2 rounded-full opacity-30" style={{ backgroundColor: '#12362a' }}></span>
        <span className="w-2 h-2 rounded-full opacity-30" style={{ backgroundColor: '#12362a' }}></span>
        <span className="w-2 h-2 rounded-full opacity-30" style={{ backgroundColor: '#12362a' }}></span>
      </div>

      {/* View All Products Button */}
      <a
        href="/productos"
        className="px-8 py-3 text-xs font-medium tracking-wide border transition-all hover:bg-opacity-10"
        style={{ borderColor: '#12362a', color: '#12362a' }}
      >
        VER TODOS LOS PRODUCTOS
      </a>
    </section>
  );
}

// ============================================
// NUESTRA CARNE SECTION
// ============================================
function NuestraCarneSection() {
  return (
    <section id="nuestra-carne" className="w-full flex" style={{ minHeight: '550px' }}>
      {/* Image */}
      <div
        className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800")'
        }}
      />

      {/* Content */}
      <div
        className="flex-1 flex flex-col justify-center gap-8 p-20"
        style={{ backgroundColor: '#12362a' }}
      >
        <span
          className="text-xs font-semibold tracking-widest opacity-70"
          style={{ color: '#eae5cd' }}
        >
          NUESTRA CARNE
        </span>
        <h2
          className="text-5xl leading-tight"
          style={{ fontFamily: 'Playfair Display, serif', color: '#eae5cd' }}
        >
          Tradicion y<br />
          Calidad en<br />
          Cada Corte
        </h2>
        <p
          className="text-base leading-relaxed opacity-90 max-w-lg"
          style={{ color: '#eae5cd' }}
        >
          Trabajamos directamente con los mejores ganaderos de la region,
          garantizando carnes de primera calidad con trazabilidad completa.
          Nuestro proceso de maduracion en seco realza el sabor y la terneza
          de cada pieza.
        </p>
        <a
          href="#contacto"
          className="inline-flex items-center justify-center px-7 py-3 text-xs font-medium tracking-wide border transition-opacity hover:opacity-80 w-fit"
          style={{ borderColor: '#eae5cd', color: '#eae5cd' }}
        >
          CONOCER MAS
        </a>
      </div>
    </section>
  );
}

// ============================================
// SOSTENIBILIDAD SECTION
// ============================================
function SostenibilidadSection() {
  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#12362a" strokeWidth="2">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
        </svg>
      ),
      title: 'Ganaderia\nResponsable',
      description: 'Trabajamos con productores que practican ganaderia regenerativa y bienestar animal.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#12362a" strokeWidth="2">
          <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path>
          <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path>
          <path d="m14 16-3 3 3 3"></path>
          <path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path>
          <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path>
          <path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path>
        </svg>
      ),
      title: 'Empaque\nEcologico',
      description: 'Utilizamos materiales biodegradables y reciclables en todos nuestros empaques.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#12362a" strokeWidth="2">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: 'Produccion\nLocal',
      description: 'Apoyamos a productores locales reduciendo la huella de carbono en el transporte.'
    }
  ];

  return (
    <section
      id="sostenibilidad"
      className="w-full py-24 px-20 flex flex-col items-center gap-16"
      style={{ backgroundColor: '#eae5cd' }}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-5 text-center">
        <span
          className="text-xs font-semibold tracking-widest"
          style={{ color: '#12362a' }}
        >
          COMPROMISO AMBIENTAL
        </span>
        <h2
          className="text-5xl"
          style={{ fontFamily: 'Playfair Display, serif', color: '#12362a' }}
        >
          Sostenibilidad
        </h2>
        <p
          className="text-base leading-relaxed max-w-xl"
          style={{ color: '#7a8a6d' }}
        >
          Creemos en una produccion responsable que respeta el medio ambiente
          y el bienestar animal.
        </p>
      </div>

      {/* Features Grid */}
      <div className="flex justify-center gap-10 flex-wrap">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-5 p-8 w-72 border"
            style={{ borderColor: 'rgba(100, 114, 87, 0.2)' }}
          >
            {feature.icon}
            <h3
              className="text-xl text-center whitespace-pre-line leading-tight"
              style={{ fontFamily: 'Playfair Display, serif', color: '#12362a' }}
            >
              {feature.title}
            </h3>
            <p
              className="text-sm text-center leading-relaxed"
              style={{ color: '#7a8a6d' }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================
// CONTACT SECTION
// ============================================
function ContactSection() {
  return (
    <section id="contacto" className="w-full flex" style={{ minHeight: '500px' }}>
      {/* Content */}
      <div
        className="flex-1 flex flex-col justify-center gap-8 p-20"
        style={{ backgroundColor: '#e8e4e0' }}
      >
        <span
          className="text-xs font-semibold tracking-widest"
          style={{ color: '#12362a' }}
        >
          CONTACTO
        </span>
        <h2
          className="text-5xl leading-tight"
          style={{ fontFamily: 'Playfair Display, serif', color: '#12362a' }}
        >
          Listo para<br />
          Probar lo Mejor?
        </h2>
        <p
          className="text-base leading-relaxed max-w-md"
          style={{ color: '#7a8a6d' }}
        >
          Contactanos para pedidos mayoristas, consultas sobre nuestros
          productos o para conocer mas sobre nuestro proceso.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#12362a" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className="text-sm" style={{ color: '#12362a' }}>+51 987 654 321</span>
          </div>
          <div className="flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#12362a" strokeWidth="2">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span className="text-sm" style={{ color: '#12362a' }}>pedidos@mariasmeat.com</span>
          </div>
          <div className="flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#12362a" strokeWidth="2">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="text-sm" style={{ color: '#12362a' }}>Lima, Perú</span>
          </div>
        </div>

        <a
          href="mailto:pedidos@mariasmeat.com"
          className="inline-flex items-center justify-center px-7 py-3 text-xs font-semibold tracking-wide transition-opacity hover:opacity-90 w-fit"
          style={{ backgroundColor: '#12362a', color: '#eae5cd' }}
        >
          ENVIAR MENSAJE
        </a>
      </div>

      {/* Image */}
      <div
        className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1558030006-450675393462?w=800")'
        }}
      />
    </section>
  );
}

// ============================================
// FOOTER COMPONENT
// ============================================
function Footer() {
  return (
    <footer
      className="w-full py-12 px-20"
      style={{ backgroundColor: '#12362a' }}
    >
      <div className="grid grid-cols-5 gap-8">
        {/* Llámanos */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-base" style={{ color: '#eae5cd' }}>
            Llámanos
          </h3>
          <a 
            href="tel:+51977736773" 
            className="text-sm hover:opacity-70 transition-opacity"
            style={{ color: '#eae5cd' }}
          >
            +51 977736773
          </a>
        </div>

        {/* Ubícanos en */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-base" style={{ color: '#eae5cd' }}>
            Ubícanos en
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: '#eae5cd' }}>
            Lote 1 Acumulado Lote 3 a Nro. S/n, Lurín, Lima Perú
          </p>
        </div>

        {/* Síguenos en */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-base" style={{ color: '#eae5cd' }}>
            Síguenos en
          </h3>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#eae5cd">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#eae5cd">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#eae5cd">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#eae5cd">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#eae5cd">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#eae5cd">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Nosotros */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-base" style={{ color: '#eae5cd' }}>
            Nosotros
          </h3>
          <a href="/procesos" className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#eae5cd' }}>
            Procesos
          </a>
          <a href="/productos" className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#eae5cd' }}>
            Productos
          </a>
          <a href="/recetas" className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#eae5cd' }}>
            Recetas
          </a>
          <a href="/cliente" className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#eae5cd' }}>
            Sé cliente
          </a>
        </div>

        {/* Trabaja con Nosotros + Políticas */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-base" style={{ color: '#eae5cd' }}>
            Trabaja con Nosotros
          </h3>
          <a href="#ubicanos" className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#eae5cd' }}>
            Ubícanos en
          </a>
          <a href="/contacto" className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#eae5cd' }}>
            Contacto
          </a>
          
          <div className="mt-4 flex flex-col gap-2">
            <a href="/privacidad" className="text-xs hover:opacity-70 transition-opacity" style={{ color: '#eae5cd' }}>
              Política de Privacidad
            </a>
            <a href="/terminos" className="text-xs hover:opacity-70 transition-opacity" style={{ color: '#eae5cd' }}>
              Términos y Condiciones
            </a>
            <a href="/cookies" className="text-xs hover:opacity-70 transition-opacity" style={{ color: '#eae5cd' }}>
              Política de Cookies
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/51977736773"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        style={{ backgroundColor: '#25D366' }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </footer>
  );
}

// ============================================
// MAIN LANDING PAGE COMPONENT
// ============================================
interface OnlyHomePageProps {
  products?: {
    items: Product[];
    total: number;
  };
}

export default function OnlyHomePage({ products }: OnlyHomePageProps) {
  // Get products from GraphQL query - they come directly as 'products' prop
  const productItems = products?.items || [];

  return (
    <div className="w-full" style={{ backgroundColor: '#eae5cd' }}>
      <Header />
      <HeroSection />
      <ProductsSection products={productItems} />
      <NuestraCarneSection />
      <SostenibilidadSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

// ============================================
// GRAPHQL QUERY FOR PRODUCTS
// ============================================
export const query = `
  query Query {
    products(filters: [{key: "limit", operation: eq, value: "8"}]) {
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

// ============================================
// LAYOUT CONFIGURATION
// ============================================
export const layout = {
  areaId: 'content',
  sortOrder: 5
};
