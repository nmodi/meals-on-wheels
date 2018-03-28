import React from 'react';
import styled from 'styled-components';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Section from '../../components/Section';
import Subtitle from '../../components/Subtitle';
import Button from '../../components/Button';

import MarketListItem from './MarketListItem';

import {actions} from '../marketReducer';

const MarketPage = props => {
    const ingredientListItems = props.ingredients.map(ingredient => {
        return (
            <MarketListItem
                key={ingredient.name}
                ingredient={ingredient}
                onClick={() => props.dispatch(actions.buyIngredient(ingredient, 1))}
            />
        );
    });

    return (
        <Section>
            <Subtitle>Farmer's Market</Subtitle>
            <ul>{ingredientListItems}</ul>
        </Section>
    );
};

const mapStateToProps = state => {
    return ({
        ingredients: state.market.ingredients
    }); 
}; 

export default connect(mapStateToProps)(MarketPage);
