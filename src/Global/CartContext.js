import React,{createContext,useReducer} from 'react'
// imported cartreducer function here
import {CartReducer} from './CartReducer'
export const CartContext = createContext();

const CartContextProvider = (props)=>{
    // useReducer State here
    //it will take first a cartreducer function and second it will take an object, integer or string etc
    //through dispatch we will call CartReducer Function
    const [cart,dispatch] = useReducer(CartReducer,{shoppingCart:[],totalPrice:0,qty:0});
    return(
        <CartContext.Provider value={{...cart, dispatch}}>
{props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;
