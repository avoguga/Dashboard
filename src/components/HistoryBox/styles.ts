import styled from 'styled-components';

export const Container = styled.div`
    height: 260px;
    width: 66%;
    margin: 10px 0;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.tertiary};

    @media(max-width: 770px) {
        width:100%
    }
    

`;

export const Grafico = styled.div`
    height: 190px;
    width: 100%;
    margin: 10px 0;
    border-radius: 5px;
`;

export const Controllers = styled.div`
    display: flex;
    >h2{
        width:60%
    }
    
`;
export const Engrenagem = styled.img`
    height: 20px;
    width: 20px;
    margin: 5px;
`;
