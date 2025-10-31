'use client';

import ProductCard from '@/components/cards';
import '@/components/PageStyle.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function HomePage() {
    const [products, setProducts] = useState([]); // State to hold product data
    const [loading, setLoading] = useState(true); // State to manage loading status
    useEffect(() => {
        // Function to fetch products
        const fetchAllData = async () => {
            try {
                const productsResponse = await axios.get('https://fakestoreapi.com/products');
                console.log('Products:', productsResponse.data);
                const cartsResponse = await axios.get('https://fakestoreapi.com/carts');
                console.log('Carts:', cartsResponse.data);
                const usersResponse = await axios.get('https://fakestoreapi.com/users');
                console.log('Users:', usersResponse.data);
                setProducts(productsResponse.data);
                setLoading(false); // Set loading to false after fetching products
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); // Set loading to false even on error
            }
        };
        fetchAllData(); // Call the fetch function when the component mounts
    }, []); // Empty dependency array ensures this effect runs only once
    return (
        <div className='container'>
            <div className='hero'>

            </div>
            {/* Display loading message or product data */}
            {loading ? (
                <p>Loading products...</p>
            ) : (
                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            )}
        </div>
    )
}