import React from 'react';
import {Container} from './styles'

const SelectInput: React.FC = () => {
    return (
        <Container>
            <select>
                <option value="teste">Pendente</option>
                <option value="teste">Realizado</option>
            </select>
        </Container>
    );
}

export default SelectInput;