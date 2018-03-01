import React from 'react'; 
import styled from 'styled-components'; 

import Section from '../../common/components/Section';
import Subtitle from '../../common/components/Subtitle';  
import Button from '../../common/components/Button'; 

const MarketPage = props => {
    return (
        <Section>
            <Subtitle>Farmer's Market</Subtitle>
            <p>For sale:</p> 
            <ul>
                <li>Tomatoes <Button>Buy</Button></li>
                <li>Beef <Button>Buy</Button></li>
                <li>Carrots <Button>Buy</Button></li>
            </ul>
            <Section>
                <Subtitle>Today's Specials</Subtitle> 
                <ul>
                    <li>Chicken <Button>Buy</Button></li>
                    <li>Bread <Button>Buy</Button></li>
                    <li>Eggs <Button>Buy</Button></li>
                </ul>                
            </Section> 
        </Section> 
    ); 
}; 

export default MarketPage; 