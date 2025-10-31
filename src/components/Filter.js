'use client';

import React from 'react';

export default function Filter() {
  return (
    <div className='filter-container'>
      <div className='filter-item'>
        <input type='checkbox' id='customizable' />
        <h3>Customizable</h3>
      </div>

      <hr className='hr-saprator' />
      <div className='filter-group'>
        <details open>
          <summary>
            <div className='sumary-itemcontainer'>
              <h3>IDEAL FOR</h3>
              <span className='filter-action all-filter'>All</span>
            </div>
          </summary>

          <div className='filter-item clear-filter-btn'>
            <button className='filter-action underline'>Unselect all</button>
          </div>

          <div className='filter-item'>
            <input type='checkbox' id='men' />
            <label htmlFor='men'>Men</label>
          </div>

          <div className='filter-item'>
            <input type='checkbox' id='women' />
            <label htmlFor='women'>Women</label>
          </div>

          <div className='filter-item'>
            <input type='checkbox' id='babyKids' />
            <label htmlFor='babyKids'>Baby & Kids</label>
          </div>
        </details>
      </div>

      <hr className='hr-saprator' />

      <div className='filter-group'>
        <details>
          <summary>
            <div className='sumary-itemcontainer'>
              <h3>OCCASION</h3>
              <span className='filter-action all-filter'>All</span>
            </div>
          </summary>

          <div className='filter-item clear-filter-btn'>
            <button className='filter-action underline'>Unselect all</button>
          </div>

          <div className='filter-item'>
            <input type='checkbox' id='casual' />
            <label htmlFor='casual'>Casual</label>
          </div>

          <div className='filter-item'>
            <input type='checkbox' id='formal' />
            <label htmlFor='formal'>Formal</label>
          </div>

          <div className='filter-item'>
            <input type='checkbox' id='party' />
            <label htmlFor='party'>Party</label>
          </div>
        </details>
      </div>

      <hr className='hr-saprator' />

      <div className='filter-group'>
        <details>
          <summary>
            <div className='sumary-itemcontainer'>
              <h3>WORK</h3>
              <span className='filter-action all-filter'>All</span>
            </div>
          </summary>

          <div className='filter-item clear-filter-btn'>
            <button className='filter-action underline'>Unselect all</button>
          </div>

          <div className='filter-item'>
            <input type='checkbox' id='embroidery' />
            <label htmlFor='embroidery'>Embroidery</label>
          </div>

          <div className='filter-item'>
            <input type='checkbox' id='printing' />
            <label htmlFor='printing'>Printing</label>
          </div>

          <div className='filter-item'>
            <input type='checkbox' id='weaving' />
            <label htmlFor='weaving'>Weaving</label>
          </div>
        </details>
      </div>

      <hr className='hr-saprator' />

      <div className='filter-group'>
        <details>
          <summary>
            <div className='sumary-itemcontainer'>
              <h3>FABRICS</h3>
              <span className='filter-action all-filter'>All</span>
            </div>
          </summary>

          <div className='filter-item clear-filter-btn'>
            <button className='filter-action underline'>Unselect all</button>
          </div>

          <div className='filter-item'>
            <input type='checkbox' id='cotton' />
            <label htmlFor='cotton'>Cotton</label>
          </div>

          <div className='filter-item'>
            <input type='checkbox' id='silk' />
            <label htmlFor='silk'>Silk</label>
          </div>

          <div className='filter-item'>
            <input type='checkbox' id='polyester' />
            <label htmlFor='polyester'>Polyester</label>
          </div>
        </details>
      </div>

      <hr className='hr-saprator' />

      <div className='filter-group'>
        <details>
          <summary>
            <div className='sumary-itemcontainer'>
              <h3>SEGMENT</h3>
              <span className='filter-action all-filter'>All</span>
            </div>
          </summary>

          <div className='filter-item clear-filter-btn'>
            <button className='filter-action underline'>Unselect all</button>
          </div>
        </details>
      </div>
    </div>
  );
}
