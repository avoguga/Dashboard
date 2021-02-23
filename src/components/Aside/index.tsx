import React, {useState} from 'react';
import logoImg from '../../asserts/infographic.svg';
import openImg from '../../asserts/menu.svg';
import closeImg from '../../asserts/close.svg';
import Toggle from '../../components/Toggle'
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu,
} from 'react-icons/md';

import {
    Container, 
    Header, 
    LogImg, 
    Title, 
    MenuContainer, 
    MenuItemLink, 
    MenuItemButton, 
    ToggleMenu,
    ThemeToggleFooter} from './styles';


import {useAuth} from '../../hooks/auth';
import {useTheme} from '../../hooks/themes';

const Aside: React.FC = () => {
    const {signOut} = useAuth();
    const { toggleTheme, theme } = useTheme();
    
    const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false)

    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    {toggleMenuIsOpened ? <MdClose/> : <MdMenu/> }
                </ToggleMenu>

                <LogImg src={logoImg} alt="Logo TrackingTrade"/>
                <Title>Painel de controle</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/">
                    Dashboard
                </MenuItemLink>
                <MenuItemButton onClick={signOut}>
                    Sair
                </MenuItemButton>
            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                <Toggle
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>
        </Container>
    );
}

export default Aside;