import React from 'react';
import InfoCard from './InfoCard';
import '../styles/HeroSection.css';

function HeroSection(){
    return (
        <div className='hero-section'>
        <h1>Welcome to Our University</h1>
        <div className="hero-buttons">
                <button>Global Education</button>
                <button>Professional Development</button>
                <button>Enterprise Solution</button>
            </div>
            <div className="cards">
                <InfoCard title="Students enrolled every year" number={16000} />
                <InfoCard title="Graduates" number={200000} />
                <InfoCard title="Academic programmes" number={120} />
                <InfoCard title="University partners" number={10} />
                <InfoCard title="Professionals trained" number={11596} />
                <InfoCard title="Executive & professional courses" number={100} />
            </div>
        </div>
    );
}

export default HeroSection;