'use client';
import React, { useState } from 'react';
import './PageStyle.css';
import ProductCard from './cards';
import ShortBy from './ShortBy';
import Filter from './Filter';

export default function HomePage({ products }) {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='container'>
      <div className='hero'>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </h2>
      </div>

      {/* Pass state control to ShortBy */}
      <ShortBy products={products} onToggleFilter={setShowFilter} />

      <div className={`main-content ${showFilter ? 'filter-visible' : ''}`}>
        {/* Render filter directly based on state */}
        {showFilter && <Filter />}

        <div className='product-grid'>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
