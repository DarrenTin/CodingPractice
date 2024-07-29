import React from 'react';
import CountUp from 'react-countup';
import '../styles/InfoCard.css'

function InfoCard({ title, number }) {
    return (
        <div className="info-card">
            <h2>{title}</h2>
            <p className="number">
                <CountUp start={0} end={number} duration={2.75} separator=',' />
            </p>
        </div>
    );
}

export default InfoCard;