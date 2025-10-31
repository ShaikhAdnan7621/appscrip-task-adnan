import { SVGLikeIcon } from '@/assets/icons'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({ product }) {
    return (
        <div key={product.id} className="product-card ">
            <div className='image-frame'>
                <Image src={product.image} alt={`Image ${product.title}`} width={500} height={500} className='product-image'/>
            </div>
            <div className='product-details '>
                <div className='row product-title '>
                    <h3 className='upppercase'>{product.title.split(' ').slice(0, 5).join(' ')}{product.title.split(' ').length > 5 && '...'}</h3>
                    <div className='like-icon'>
                        <SVGLikeIcon />
                    </div>
                </div>
                <div>
                    <p>
                        <Link href='/' className='link'> Sign in </Link> or Create an account to see pricing
                    </p>
                </div>
            </div>
        </div>
    )
}
