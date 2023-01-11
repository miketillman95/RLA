import React, {createContext, useContext, useState} from 'react'

export const StateContext = () => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState ([])
    const [totalPrice, setTotalPrice] = useState (0)
    const [totalQuantities, setTotalQuantities] = useState (0)
    const [qty, setQty] = useState (1)

    let FoundProduct
    let index

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((items) => items._id ==product._id)
        setTotalPrice((previousTotalPrice) => previousTotalPrice + product.price * quantity)
        setTotalQuantities((previousTotalQuantities) => previousTotalQuantities +quantity)
    }

return (
    <><Context.Provider>
        value={{
            onAdd
        }}
    </Context.Provider></>
)
}
