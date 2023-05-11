import React, {useRef} from 'react'
import { toast } from 'react-hot-toast';
import getStripe from '../lib/getStripe';
import { AiOutlineLeft } from 'react-icons/ai';



const Cart = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

    const handleCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch('api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItems),
        });

        if(response.statusCode == 500) return;

        const data = await response.json();

        toast.loading('Redirecting...');

        stripe.redirectToCheckout({sessionId: data.id})
    }

    return(
    <div className= 'cart-wrapper' ref={cartRef}>
        <div className='cart-container'>
            <button 
            type= 'button'
            className='cart-heading'
            onClick={() => setShowCart(false)}>
                <AiOutlineLeft/>
                <span className='heading'>Your Cart</span>
                <span className='cart-num-items'>({totalQuantities} items)</span>
            </button>
        </div>
    </div>
)

}

export default Cart