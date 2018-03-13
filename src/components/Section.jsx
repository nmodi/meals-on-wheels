import React from 'react';
import styled from 'styled-components';

const Section = styled.section `
    display: block; 
    flex: ${props => props.primary
    ? '4'
    : '0 1 auto'}; 
`;

export default Section;