import styled from 'styled-components';

export const Container = styled.li`
   
    background-color: ${props => props.theme.colors.tertiary};
    border-bottom: 1px solid ${props => props.theme.colors.gray};

    list-style:none;

    width: 310px;
    height: 60px;

    margin: 10px 0;
    padding: 12px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    > div span {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 7px;
        font-weight: bold;
    }
    > div small {
        opacity: 0.6;
    }
    
`;

export const Pendencias = styled.li`
       
    padding-left: 10px;   
    > small {
        opacity: 0.6;
    }
`;

export const Acao = styled.p`
    cursor: pointer;
    transition: all .3s;

    margin-bottom: 7px;

    color: #9FD046;
    border: 2px solid #7FC008;
    border-radius:20px;

    font-weight: bold;
    text-align: center;
`;