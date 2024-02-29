import React, { useState } from 'react'

const Product = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [amount, setAmount] = useState(0);

    const findTotalAmount = () => {
        setAmount(price * quantity);
    }

    return (
        <>
            Product Name: <input type="text" placeholder='Enter Product Name' onChange={(e) => setName(e.target.value)} />
            <br />
            Unit Price: <input type="number" placeholder='Enter Product Unit Price' onChange={(e) => setPrice(e.target.value)} />
            <br />
            Quantity: <input type="number" placeholder='Enter Product Quantity' onChange={(e) => setQuantity(e.target.value)} />
            <br />
            <button onClick={findTotalAmount}>Get Total Amount</button>
            <br />
            Total Amount: {amount}
        </>
    )
}

export default Product
