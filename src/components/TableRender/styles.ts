import styled from 'styled-components';


export const Container = styled.div`
    
    width:100%;
    height: 21rem;
    margin: 10px 0;
    border-radius: 5px;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.tertiary};

    @media(max-width: 770px) {
        width:100%
    }
`;
export const Title = styled.div`
    display: flex;
    >h2{
        width:70%
    }
`;

export const SubTitle = styled.div`

   
    width:100%;
    display:flex;
    justify-content:space-between;
    >h4{
        
    }
    
`;

export const Content = styled.div`
    
    overflow-x:scroll;

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }
`;
export const SubInput = styled.div`
    display:flex;
`;
export const Input = styled.div`
   margin:10px 0;

    > input {
        height: 28px;
        width: 100%;
        border-radius: 50px;
        }
`;

