import React from 'react'; 

import PageHeader from './PageHeader'; 
import Nav from './Nav'; 

import '../assets/css/reset.scss'; 


export default class App extends React.Component {
    render() {
        return (
            <div>
                <PageHeader />
                <Nav /> 
                

                {/**
                * children component should go here 
                */}
            </div>
        );
    }

}