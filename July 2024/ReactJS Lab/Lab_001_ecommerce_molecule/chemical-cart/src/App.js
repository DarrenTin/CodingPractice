import './App.css';
import React from 'react';
import MoleculeList from './components/MoleculeList';
// import { CartProvider } from './context/CartContext';
// import Cart from './components/Cart';

function App() {
  return (
      // <CartProvider>
        <div className='App'>
        <MoleculeList />
        {/* <Cart /> */}
        </div>
      // </CartProvider>
  );
}

export default App;
