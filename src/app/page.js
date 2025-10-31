import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/components/HomePage";
import axios from 'axios';

export default async function Home({ searchParams }) {
  const params = await searchParams; // ✅ Fix: await it
  let products = await fetchProducts();

  const sort = params?.sort;

  if (sort) {
    if (sort === 'newest') {
      products.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sort === 'popular') {
      products.sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (sort === 'price-high-low') {
      products.sort((a, b) => b.price - a.price);
    } else if (sort === 'price-low-high') {
      products.sort((a, b) => a.price - b.price);
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomePage products={products} searchParams={params} />
      </main>
    </div>
  );
}

async function fetchProducts() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    return response.data.map((product, index) => ({
      ...product,
      date: new Date(new Date().getTime() - (Math.random() * 1000 * 60 * 60 * 24 * 30 * (index + 1)))
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
