'use client';

import React from 'react';
import './PageStyle.css'
import ProductCard from './cards';
import ShortBy from './ShortBy';
import Filter from './Filter';
import { useSearchParams } from 'next/navigation';

export default function HomePage({ products }) {
  const searchParams = useSearchParams();
  const showFilter = searchParams.get('filterbar') === 'true';

  return (
    <div className='container'>
      <div className='hero'>
        <h1 >DISCOVER OUR PRODUCTS</h1>
        <h2 >Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</h2>
      </div>
      <ShortBy products={products} />
      <div className={`main-content ${showFilter ? 'filter-visible' : ''}`}>
        <Filter />
        <div className="product-grid">
          {products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
