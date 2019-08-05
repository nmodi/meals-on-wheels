import styled from 'styled-components';

const Card = styled.div`
    background: ${props => props.theme.card};
    border: 1px solid ${props => props.theme.greyAccent};
    overflow: hidden;
    padding: 10px;
    margin: 20px;
    min-width: 300px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
`;

export default Card;
