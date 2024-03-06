import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/actions';

const Products = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    const handleAddToCart = (product)=>{
        dispatch(addToCart(product));
    }

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product)=>(
                    <li key={product.pid}>
                        {product.pname} - ${product.price}{' '} - {product.qty}{' '}
                        <button onClick={()=> handleAddToCart(product)}>Add To Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;