import React from 'react';
import logoImg from '../../asserts/infographic.svg';
import {Container, Header, LogImg, Title, MenuContainer, MenuItemLink, MenuItemButton} from './styles';

import {useAuth} from '../../hooks/auth';

const Aside: React.FC = () => {
    const {signOut} = useAuth();
    
    return (
        <Container>
            <Header>
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
        </Container>
    );
}

export default Aside;