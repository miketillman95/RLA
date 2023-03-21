import React, {useState} from 'react'
import {useStateContext} from '../../context/StateContext'
import { client, urlFor } from '../../lib/client';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'



const ProductDetails = ({product, products} ) => {
    // api fetch from schema
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0)
    // calling state from contextApi
    const {decQty, incQty, qty, onAdd, setShowCart} = useStateContext();

    const handleBuyNow = () => {
        onAdd(product, qty)
        setShowCart(true)
    }


return (
<div>
    <div className='product-detail-containment'>
        <div className='image-container'>
            <img src={urlFor(image && image[index])} className="product-detail-image" />
            {console.log(image)}
        </div>
        <div className='small-images-container'>
            {image?.map((item, i) => {
            <img 
            key= {i}
            src= {urlFor(item)}
            className={i === index ? 'small-image selected-image' : 'small-image'}
            onMouseEnter = {() => setIndex(i)
            }/>
            })}
        </div>
        <div className="product-detail-desc">
            <h1>{name}</h1>
            {/* <div className="reviews">
            <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            </div>
            <p>
            (20)
            </p>
            </div> */}
            <h4>Details: </h4>
            <p>{details}</p>
            <p className="price">${price}</p>
            <div className="quantity">
                <h3>Quantity:</h3>
                <p className="quantity-desc">
                <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                <span className="num">{qty}</span>
                <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                </p>
            </div>
            <div className="buttons">
                <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
                <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
            </div>
        </div>
    </div>
</div>
)
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug{
            current
        }
    }` 

    const products = await client.fetch(query)

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }

}

export const getStaticProps = async ({params: {slug}}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`
    

    const product = await client.fetch(query)
    console.log(product)
    return {
        props: {product}
    }

}



export default ProductDetails