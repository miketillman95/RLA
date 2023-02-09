import React, {useState} from 'react'
import {useStateContext} from '../../context/StateContext'
import {Product} from '../../components/'
import { client, urlFor } from '../../lib/client';




const ProductDetails = (product, products ) => {
    // api fetch from schema
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0)
    // calling state from contextApi
    const {deQty, incQty, qty, onAdd, setShowCart} = useStateContext();

    const handleBuyNow = () => {
        onAdd(product, qty)
        setShowCart(true)
    }


return (
    <div></div>
)
}

export default ProductDetails