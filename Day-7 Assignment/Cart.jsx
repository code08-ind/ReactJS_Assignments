import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/actions';

const Cart = () => {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId)=>{
        dispatch(removeFromCart(productId));
    }

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.pid}>
                        {item.pname} - ${item.price} - {item.qty}{' '}
                        <button onClick={()=> handleRemoveFromCart(item.pid)}>Remove From Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;