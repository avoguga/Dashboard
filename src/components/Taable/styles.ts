import styled from 'styled-components';


export const Container = styled.div`
    
    width:100%;
    height: 300px;
    margin: 10px 0;
    border-radius: 5px;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${props => props.theme.colors.tertiary};

    
`;
export const Title = styled.div`
`;

export const SubTitle = styled.div`

    
>h4{
       font-weight: normal;
       opacity:0.4;
       color: ${props => props.theme.colors.white}
       
   };
  
>div{
    
    margin-left:150px;
       
   };

   display:flex;
   justify-content:space-between;
   
`;


export const Scroll = styled.div`
    overflow-y: scroll;
    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.primary};
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }
`;

export const Input = styled.div`
   margin:10px 0;

> input {
    height: 28px;
    width: 100%;
    border-radius: 50px;
    }
`;

