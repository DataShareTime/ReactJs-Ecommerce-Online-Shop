import React, { createContext, useReducer } from 'react'
// imported cartreducer function here
import { CartReducer } from './CartReducer'
export const CartContext = createContext();

const CartContextProvider = (props) => {
    // useReducer State here
    //it will take first a Cartreducer function and-- 
    //--second it can be take an object, integer or string etc but we have an object.
    //it returns two things 
    //cart will store object
    //through dispatch we will call CartReducer Function

    const [cart, dispatch] = useReducer(CartReducer, { shoppingCart: [], totalPrice: 0, qty: 0 });
    return (
        <CartContext.Provider value={{ ...cart, dispatch }}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;
