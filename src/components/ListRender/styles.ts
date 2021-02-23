import styled from 'styled-components';


export const Container = styled.div`
    
    width:32%;
    height: 500%;
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
`;

export const SubTitle = styled.div`
>h4{
       font-weight: normal;
       opacity:0.4;
       color: ${props => props.theme.colors.white}
       
   }
`;

export const Engrenagem = styled.img`
    height: 20px;
    width: 20px;
    margin-left: 100px;
`;
export const Content = styled.div`
    
`;
export const Filters = styled.div`
    
`;
export const Input = styled.div`
   margin:10px 0;

    > input {
        height: 28px;
        width: 100%;
        border-radius: 50px;
        }
`;

