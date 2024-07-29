import React, { useState } from 'react';
import moleculesArray from './database';
import SelectedItem from './SelectedItem';
// import { useCart } from '../context/CartContext';
import '../styles/MoleculeList.css';

function MoleculeList(){
    // const { addToCart } = useCart();
    const [selectedMoleculeName, setSelectedMoleculeName] = useState('Water');
    const selectedMolecule = moleculesArray.find(molecule => molecule.name === selectedMoleculeName);
    return(
        <div>
        <h1>Chemical Molecules</h1>
        <div className='molecules-list'>
            {moleculesArray.map(molecule => (
            <button
                key={molecule.name}
                onClick={() => setSelectedMoleculeName(molecule.name)}
            >
                {molecule.name}
            </button>
            ))}
        </div>
            {selectedMolecule && (
            <div>
            <SelectedItem
                image={selectedMolecule.image}
                name={selectedMolecule.name}
                formula={selectedMolecule.formula}
                price={selectedMolecule.price}
            />
            {/* <button onClick={() => addToCart(selectedMolecule)}>Add to Cart</button> */}
            </div>
            )}
        </div>
    );
}

export default MoleculeList;