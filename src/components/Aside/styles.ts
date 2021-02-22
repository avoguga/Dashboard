import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray}
`;

export const  Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
    padding-top: 110px;
`;

export const LogImg = styled.img`
    height: 20px;
    width: 20px;
    margin: 5px;
`;

export const MenuContainer = styled.nav`
    margin-top:50px;
    display: flex;
    flex-direction: column;
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