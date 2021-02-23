import styled from 'styled-components';

export const Container = styled.div`

    > select{
        height: 28px;
        width: 244px;
        border-radius: 100px;

        @media(max-width: 770px) {
        width: 100%
    };
        @media(max-width: 900px) {
        width: 180px
    };
    
`;

