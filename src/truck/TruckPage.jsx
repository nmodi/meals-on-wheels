import React from 'react'; 
import styled from 'styled-components'; 

import Section from '../components/Section';
import Subtitle from '../components/Subtitle';  

const TruckPage = props => {
    return (
        <Section>
            <Subtitle>Your truck</Subtitle>

            <p>info about your current truck</p> 
        </Section> 
    ); 
}; 

export default TruckPage; 