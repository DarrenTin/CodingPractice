import React from 'react';
import Section from './Section';
import '../styles/UniversityInfo.css';

function UniversityInfo() {
    return(
        <div className='university-info'>
            <Section title="History of University">
                <p>Our university was founded in...</p>
            </Section>
            <Section title="Degrees and Diplomas">
                <p>We offer a wide range of degrees and diplomas...</p>
            </Section>
            <Section title="Professional Development">
                <p>Our professional development programs are designed...</p>
            </Section>
            <Section title="Enterprise Solution">
                <p>We provide enterprise solutions to...</p>
            </Section>
            <Section title="About University">
                <p>Learn more about our mission and values...</p>
            </Section>
            <Section title="Statement of Commitment">
                <p>We are committed to...</p>
            </Section>
        </div>
    );
}

export default UniversityInfo;