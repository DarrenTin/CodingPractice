import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

function Cart() {
    const { cart, removeFromCart, updateQuantity } = useCart()

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const calculateTax = (subTotal) => {
        const taxRate = 0.07;
        return subTotal * taxRate;
    };

    const calculateDiscount = (subtotal) => {
        const discountRate = 0.10; // 10% member discount
        return subtotal * discountRate;
    };
    
    const handleQuantityChange = (event, itemName) => {
        const newQuantity = parseInt(event.target.value, 10);
        if (newQuantity > 0) {
          updateQuantity(itemName, newQuantity);
        }
    };

    const subtotal = calculateSubtotal();
    const tax = calculateTax(subtotal);
    const discount = calculateDiscount(subtotal);
    const total = subtotal + tax - discount;

    return(
        <div className="cart">
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.name}>
                        <span>{item.name}</span>
                        <span>${item.price.toFixed(2)}</span>
                        <input 
                            type="number"
                            value={item.quantity}
                            onChange={(event) => handleQuantityChange(event, item.name)}
                        />
                        <button onClick={() => removeFromCart(item.name)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div className="summary">
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p>Discount: -${discount.toFixed(2)}</p>
                <p>Total: ${total.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Cart;