import React, {useState} from 'react';

import Toggle from '../Toggle';
import {Container, Profile, Welcome, UserName} from './styles';

import {useTheme} from '../../hooks/themes';

const MainHeader: React.FC = () => {
    const {toggleTheme, theme} = useTheme();

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme)
        toggleTheme();
    }
    return (
        <Container>
            <Toggle
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />

            <Profile>
                <Welcome>Olá, </Welcome>
                <UserName>Tracking Trader!</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;