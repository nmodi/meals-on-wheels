import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

const rootDiv = document.createElement('div'); 
rootDiv.id = 'root'; 
document.body.appendChild(rootDiv); 
const root = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    root
);
