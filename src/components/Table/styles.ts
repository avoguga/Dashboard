import styled from 'styled-components';

export const Container = styled.div`
   
    background-color: ${props => props.theme.colors.tertiary};
    border-bottom: 1px solid ${props => props.theme.colors.gray};

    width: 100%;
    height: 60px;

    margin: 10px 0;
    padding: 12px 10px;

    display: flex;
    justify-content: space-between;
    flex-direction:column;
    align-items: center;

    position: relative; 

   
`;

export const Scroll = styled.div`
    width:100%;

`;
export const SmallContainer = styled.div`
    margin: 10px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;  
`;
export const Indic = styled.div`
    margin-bottom: 20px;
    margin-left:10px;
    display: flex;
    justify-content: space-between;
    >div{
    margin: 5px 20px;
    padding: 12px 30px;
    width:30%;
    font-size: 14px;
    }
    
`;

export const Tabela = styled.div`
    background-color: ${props => props.color};

    height: 40px;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
`;
export const TabelaNome = styled.div`
    background-color: ${props => props.color};
    font-size: 14px;
    width:30%;
    height: 40px;
`;
export const TabelaUlt = styled.div`
    background-color: ${props => props.color};
    height: 40px;
    width:20%;
    font-size: 14px;
    margin-left: 90px;
`;

