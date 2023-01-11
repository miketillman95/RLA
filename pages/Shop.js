import React from 'react'
import {client} from '../lib/client'


const Shop = () => {
return (
    <>
        <body className='shop-center'>
            <h1>Shop</h1>
            
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