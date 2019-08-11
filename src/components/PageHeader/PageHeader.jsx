import React, {useState} from 'react';
import styled from 'styled-components';

import SettingsPanel from './SettingsPanel';

const Hh = styled.h1`
    font-size: 28px;
    font-weight: 700;
    text-transform: uppercase;
`;

const Header = styled.header`
    color: ${props => props.theme.main};
    align-items: center;
    background: ${props => props.theme.card};
    height: 45px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.08);
    justify-content: space-between;
    border: 1px solid ${props => props.theme.greyAccent};
    display: flex;
    padding: 0 45px;
`;

const PageHeader = ({setTheme}) => {
    const [isSettingsOpen, setSettingsOpen] = useState(false);

    return (
        <>
            <Header>
                <Hh>Street Eats</Hh>
                {/* TODO make a dropdown menu for settings */}
                <div>
                    <span onClick={() => setSettingsOpen(!isSettingsOpen)}>
                        Settings ▾
                    </span>
                </div>
            </Header>
            {isSettingsOpen && (
                <SettingsPanel
                    setTheme={setTheme}
                    setSettingsOpen={setSettingsOpen}
                />
            )}
        </>
    );
};

export default PageHeader;
