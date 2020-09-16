import React, { useContext } from 'react'
import Banner from './Banner'
import { CartContext } from "../Global/CartContext";
import { ProductsContext } from "../Global/ProductContext";

const Products = () => {
    const { products } = useContext(ProductsContext);
    //accessing dispatch function
    const { dispatch } = useContext(CartContext)

    return (
        <div className="container">
            <Banner />
            <div className="products">
                {products.map((product) => (
                    <div className="product" key={product.id}>

                        <div className="product-image">
                            <img src={product.image} alt="not found" />
                        </div>
                        <div className="product-details">
                            <div className="product-name">
                                {product.name}
                            </div>
                            <div className="product-price">
                                ${product.price}.00
                            </div>
                        </div>

                        {/* onClick function calls to dispacsh function,  & dispatch will call to Reducer Function
                         Through dispatch function we will send (Type,product-Id, complete Product)
                         */}
                        <div className="add-to-cart" onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.id, product: product })}>
                            Add to cart
                    </div>
                        {product.status === 'hot' ? <div className="hot">Hot</div> : ''}
                        {product.status === 'new' ? <div className="new">New</div> : ''}
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Products;