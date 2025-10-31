'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useCallback, useEffect } from 'react';
import CustomSelect from './CustomSelect';

export default function ShortBy({ products, onToggleFilter }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [showFilter, setShowFilter] = useState(false);

  // Keep sort synced with URL
  const currentSort = searchParams.get('sort') || 'recommended';

  const updateQuery = useCallback(
    (updates) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, value]) => {
        if (!value) params.delete(key);
        else params.set(key, value);
      });
      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const handleSortChange = (e) => {
    updateQuery({ sort: e.target.value });
  };

  const handleShowFilterClick = () => {
    setShowFilter((prev) => !prev);
    if (onToggleFilter) onToggleFilter(!showFilter); // inform parent
  };

  return (
    <div className="ShortBy-row">
      <div className="short-bar-left">
        <div className="item-count uppercase">{products.length} Items</div>

        <button onClick={handleShowFilterClick} className="uppercase">
          <span className='showinbigonly'>
            {showFilter ? (
              <>
                <LeftArrow />
                <span >{`Hide `}</span>
              </>
            ) : (
              <>
                <RightArrow />
                <span  >{`Show `}</span>
              </>
            )} </span>
          <span>Filter</span>
        </button>
      </div>

      <span className='vl-saprator' >
        <svg width="1" height="25" viewBox="0 0 1 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="25" x2="0.5" stroke="#E5E5E5" />
        </svg> 
      </span>
      <CustomSelect
        value={currentSort}
        onChange={(val) => updateQuery({ sort: val })}
        options={[
          { value: 'recommended', label: 'Recommended' },
          { value: 'newest', label: 'Newest first' },
          { value: 'popular', label: 'Popular' },
          { value: 'price-high-low', label: 'Price : high to low' },
          { value: 'price-low-high', label: 'Price : low to high' },
        ]}
      />

    </div>
  );
}

export const LeftArrow = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.99986 2.72125L5.65319 7.06792C5.13986 7.58125 5.13986 8.42125 5.65319 8.93458L9.99986 13.2812"
      stroke="#292D32"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


// create a right arrow component
export const RightArrow = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.99984 13.2787L10.3465 8.93204C10.8598 8.41871 10.8598 7.57871 10.3465 7.06537L5.99984 2.71871"
      stroke="#292D32"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
) 