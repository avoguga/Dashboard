import styled, {css} from 'styled-components';

interface IContainerProps {
    menuIsOpen: boolean;
}

interface IThemeToggleFooterProps {
    menuIsOpen: boolean;
}


export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;

    border-right: 1px solid ${props => props.theme.colors.gray};

    position: relative; 

    @media(max-width: 600px){
        padding-left: 7px;
        position: fixed;
        z-index: 2;
        
        width: 170px;

        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow:hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }
`;

export const  Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;

    
        
`;

export const LogImg = styled.img`
    height: 20px;
    width: 20px;
    margin: 5px;

    @media(max-width: 600px){
        display: none;
        
    }
`;

export const MenuContainer = styled.nav`
    margin-top:50px;
    display: flex;
    flex-direction: column;
`;
export const ToggleMenu = styled.button`
    width: 40px;
    height: 40px;

    border-radius: 5px;
    font-size: 22px;
    
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};

    transition: opacity .3s;

    &:hover{
        opacity: 0.7;
    }

    display: none;

    @media(max-width: 600px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const CloseImg = styled.img`
    height: 20px;
    width: 20px;
`;
export const OpenImg = styled.img`
    height: 20px;
    width: 20px;
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
    display: none;
    position: absolute;
    bottom: 30px;

    @media(max-width: 600px){
        display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    }

`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    margin: 7px 0;
    display: flex;
    align-items: center;
    transition: opacity .3s;
    &:hover {
        opacity: .7;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    font-size: 18px;
    font-weight: 1;

    @media(max-width: 600px){
        display:none;
    }
`;

export const MenuItemButton = styled.button`
    font-size: 16px;
    color: ${props => props.theme.colors.white};

    border: none;
    background:none;

    text-decoration: none;
    display: flex;
    align-items: center;
    margin: 7px 0;
    transition: opacity .3s;
    &:hover {
        opacity: .7;
    }
`;