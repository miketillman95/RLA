import React from 'react'
import {client} from '../lib/client'
import Link from 'next/link'


const Shop = () => {
return (
    <>
        <body className='shop-center'>
            <Link style={{color: 'black', textDecoration: 'none'}}href='/'> <h1>Shop</h1></Link>

        </body>
    </>
)
}


export async function getStaticProps() {

	const products = await client.fetch(`*[_type == 'product']`)

	return {
		props: {products}
	}
}
export default Shop