import React from 'react';
import '../styles/SelectedItem.css'

function SelectedItem({ image, name, formula, price }) {
    return (
        <div className='selected-item'>
            <p>{name} ({formula})</p>
            <img src={image} alt={name} />
            <p>Price: ${price}</p>
        </div>
    );
}

export default SelectedItem;