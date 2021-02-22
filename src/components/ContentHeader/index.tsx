import React from 'react';
import {Container, TitleContainer, Controllers} from './styles'
import SelectInput from '../../components/SelectInputDiario'

const ContentHeader: React.FC = () => {
    return (
        <Container>
            <TitleContainer>
                <h1>Painel de controle</h1>
            </TitleContainer>
        </Container>
    );
}

export default ContentHeader;