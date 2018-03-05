import React from 'react'; 
import styled from 'styled-components'; 

import Section from '../../app/components/Section';
import Subtitle from '../../app/components/Subtitle';  
import StatusBar from '../../app/components/StatusBar'; 

const SupplyStorePage = props => {
    return (
        <Section>
            <StatusBar/>
            <Subtitle>Restaurant Supply Company</Subtitle>

            <p>info about your current truck</p> 
        </Section> 
    ); 
}; 

export default SupplyStorePage; 