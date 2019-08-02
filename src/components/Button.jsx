import styled, {css} from 'styled-components';
import {lighten} from 'polished'; 

// prettier-ignore
const Button = styled.button`
    border-radius: 3px;
    border: none;

    text-transform: uppercase;

    text-align: center;
    padding: 2px 6px;

    background: ${props => props.theme.default};
    color: white;

    &:hover {
        background: ${props => lighten(0.2, props.theme.default)} 
    }

    &:active {
        background: ${props => lighten(0.2, props.theme.default)} 
    }

    ${props => props.primary && css`
        background: ${props => props.theme.main};
    `}

    ${props => props.success && css`
        background: ${props => props.theme.success};
    `}

    ${props => props.warning && css`
        background: ${props => props.theme.warning};
    `}

    ${props => props.danger && css`
        background: ${props => props.theme.danger};
    `}

    ${props => props.info && css`
        background: ${props => props.theme.info};
    `}
`;

export default Button;
