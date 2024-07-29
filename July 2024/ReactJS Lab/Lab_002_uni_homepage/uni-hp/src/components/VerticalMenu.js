import React, { useState } from 'react';
import '../styles/VerticalMenu.css';

function VerticalMenu(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='vertical-menu'>
            <button className='menu-button' onClick={() => setIsOpen}>
                {isOpen ? 'X' : '三'}
            </button>
        {isOpen && (
            <nav className="menu-content">
            <ul>
                <li>History of University</li>
                <li>Degrees and Diplomas ></li>
                <li>Professional Development ></li>
                <li>Enterprise Solution ></li>
                <li>About University ></li>
                <li>Statement of Commitment ></li>
                <li>Thought Leadership</li>
                <li>News & Events</li>
                <li>Articles & Inspirations</li>
                <li>Library</li>
                <li>Learners’ Login</li>
                <li>Alumni</li>
                <li>Academics</li>
                <li>Contact Us</li>
            </ul>
        </nav>  
        )}
        </div>
    );
}

export default VerticalMenu;