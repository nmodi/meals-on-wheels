import React from 'react'; 
import styled from 'styled-components'; 

const Button = styled.button`
    display: inline-block; 
    border-radius: 3px; 
    margin: 1px; 
    background: ${props => props.theme.blue}; 
    border: none; 
    color: white; 
    padding: 5px; 
`;

export default Button; 