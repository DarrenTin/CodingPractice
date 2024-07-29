import React, {createContext, useState, useContext} from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // retrieve cart from local storage or initialize as empty
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(cartItem => cartItem.name === item.name);
            if(existingItemIndex > -1){
                // update if exist
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += 1;
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                return updatedCart;
            } else {
                // add new item
                const updatedCart = [...prevCart, { ...item, quantity: 1}];
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                return updatedCart;
            }
        });
    };

    const removeFromCart = (itemName) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter(item => item.name !== itemName);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const updateQuantity = (itemName, quantity) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map(item => item.name === itemName ? { ...item, quantity } : item);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
