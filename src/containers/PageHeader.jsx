import React from 'react'; 
import styled from 'styled-components';


const Header = styled.header`
    position: absolute; 
    left: 0; 
    top: 0; 
    width: 100%; 
`; 


const PageHeader = props => {
    return (
        <Header>
            <h1>Meals on Wheels</h1>
        </Header>
    ); 
}; 


export default PageHeader; 