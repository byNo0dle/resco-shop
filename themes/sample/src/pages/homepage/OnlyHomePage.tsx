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
      style={{ backgroundColor: '#f0ece9', minHeight: '600px' }}
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
          style={{ backgroundColor: '#12362a', color: '#f0ece9' }}
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
      style={{ backgroundColor: '#f0ece9' }}
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
          style={{ color: '#f0ece9' }}
        >
          NUESTRA CARNE
        </span>
        <h2
          className="text-5xl leading-tight"
          style={{ fontFamily: 'Playfair Display, serif', color: '#f0ece9' }}
        >
          Tradicion y<br />
          Calidad en<br />
          Cada Corte
        </h2>
        <p
          className="text-base leading-relaxed opacity-90 max-w-lg"
          style={{ color: '#f0ece9' }}
        >
          Trabajamos directamente con los mejores ganaderos de la region,
          garantizando carnes de primera calidad con trazabilidad completa.
          Nuestro proceso de maduracion en seco realza el sabor y la terneza
          de cada pieza.
        </p>
        <a
          href="#contacto"
          className="inline-flex items-center justify-center px-7 py-3 text-xs font-medium tracking-wide border transition-opacity hover:opacity-80 w-fit"
          style={{ borderColor: '#f0ece9', color: '#f0ece9' }}
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
      style={{ backgroundColor: '#f0ece9' }}
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
          style={{ backgroundColor: '#12362a', color: '#f0ece9' }}
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
      className="w-full py-16 px-20 flex flex-col gap-10"
      style={{ backgroundColor: '#12362a' }}
    >
      {/* Main Footer Content */}
      <div className="flex justify-between items-start">
        {/* Brand */}
        <div className="flex flex-col gap-4 max-w-xs">
          <span
            className="text-xl font-bold tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif', color: '#f0ece9' }}
          >
            MARIA'S MEAT MARKET
          </span>
          <p
            className="text-sm leading-relaxed opacity-70"
            style={{ color: '#f0ece9' }}
          >
            Distribuidora de carnes premium para los paladares mas exigentes desde 1985.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f0ece9" strokeWidth="2">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f0ece9" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f0ece9" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-20">
          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <span
              className="text-xs font-semibold tracking-widest"
              style={{ color: '#f0ece9' }}
            >
              NAVEGACION
            </span>
            {['Home', 'Comprar', 'Nuestra Carne', 'Sostenibilidad'].map((link) => (
              <a
                key={link}
                href={link === 'Home' ? '/' : link === 'Comprar' ? '/productos' : `#${link.toLowerCase().replace(' ', '-')}`}
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: '#f0ece9' }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Products Links */}
          <div className="flex flex-col gap-4">
            <span
              className="text-xs font-semibold tracking-widest"
              style={{ color: '#f0ece9' }}
            >
              PRODUCTOS
            </span>
            {['Cortes Premium', 'Hamburguesas', 'Embutidos', 'Ofertas'].map((link) => (
              <a
                key={link}
                href="/productos"
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: '#f0ece9' }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="flex justify-between items-center pt-5 border-t"
        style={{ borderColor: 'rgba(240, 236, 233, 0.2)' }}
      >
        <span
          className="text-xs opacity-50"
          style={{ color: '#f0ece9' }}
        >
          © 2024 Maria's Meat Market. Todos los derechos reservados.
        </span>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-xs opacity-50 hover:opacity-100 transition-opacity"
            style={{ color: '#f0ece9' }}
          >
            Terminos y Condiciones
          </a>
          <a
            href="#"
            className="text-xs opacity-50 hover:opacity-100 transition-opacity"
            style={{ color: '#f0ece9' }}
          >
            Politica de Privacidad
          </a>
        </div>
      </div>
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
    <div className="w-full" style={{ backgroundColor: '#f0ece9' }}>
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
