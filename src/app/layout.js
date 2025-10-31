
import localFont from 'next/font/local';
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const simplon = localFont({
  src: './Simplon Norm.ttf',
  display: 'swap',
  variable: '--font-simplon',
})

export const metadata = {
  title: "Modern Ecommerce Store - Find the Best Products Online",
  description: "Your one-stop shop for the latest and greatest products. We offer a wide variety of items, from electronics to clothing, all at competitive prices.",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Modern Ecommerce Store',
    'url': 'https://example.com',
    'logo': 'https://example.com/logo.png',
  };

  return (
    <html lang="en">
      <body className={simplon.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
