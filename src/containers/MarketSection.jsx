import React from 'react'; 
import styled from 'styled-components'; 

import Section from '../components/Section';
import Subtitle from '../components/Subtitle';  

const MarketSection = props => {
    return (
        <Section>
            <Subtitle>Farmer's Market</Subtitle>
            <p>For sale:</p> 
            <ul>
                <li>Tomatoes <button>Buy</button></li>
                <li>Beef <button>Buy</button></li>
                <li>Carrots <button>Buy</button></li>
            </ul>
        </Section> 
    ); 
}; 

export default MarketSection; 