import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

import Button from '../Button';

const SettingsContainer = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    top: 46px;
    right: 0;
    background: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.greyAccent};
    border-bottom: 1px solid ${props => props.theme.greyAccent};
    border-left: 1px solid ${props => props.theme.greyAccent};
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.08);

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SettingsPanel = ({setTheme, setSettingsOpen}) => {
    const node = useRef();

    const handleClick = e => {
        if (!node.current.contains(e.target)) {
            setSettingsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    return (
        <SettingsContainer ref={node}>
            <div>
                <Button onClick={() => setTheme('light')}>
                    Set light theme
                </Button>
            </div>
            <div>
                <Button onClick={() => setTheme('dark')}>Set dark theme</Button>
            </div>
        </SettingsContainer>
    );
};

export default SettingsPanel;
