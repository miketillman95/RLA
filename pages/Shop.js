import React from 'react'
import {client} from '../lib/client'
import Link from 'next/link'
import Product from '../components/Product'


const Shop = ({products}) => {
return (
    <>
        <div className='shop-center'>
            <Link style={{color: 'black', textDecoration: 'none'}}href='/'> <h1>Shop</h1></Link>
        <div className='product-container'>
                { products?.map((product) => <Product key= {products._id} product= {product}/>)}
            </div>
        </div>
    </>
)
}


export const getServerSideProps = async () => {
    const query = '*[_type == "product"]'
    const products = await client.fetch(query)


    return {
        props: {products}
    }
}
export default Shop