import React from 'react';
import {Container} from './styles'

const SelectInput: React.FC = () => {
    return (
        <Container>
            <select>
                <option value="teste">Diário</option>
                <option value="teste">Mensal</option>
                <option value="teste">Anual</option>
            </select>
        </Container>
    );
}

export default SelectInput;