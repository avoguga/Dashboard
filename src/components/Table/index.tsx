import React from 'react';
import {
  Container,
  Scroll,
  SmallContainer,
  TabelaNome,
  TabelaUlt,
  Tabela,
  Indic} from './styles'


interface IList {
  nome: string;
  planejado: string;
  realizado: string;
  ultimaatt: string;
}

const Table: React.FC<IList> = ({
  nome,
  planejado,
  realizado,
  ultimaatt
}) => {
  return(
    <Container>
      <Scroll>
        <SmallContainer>
          <TabelaNome>{nome}</TabelaNome>
          <Indic>
            <div>{planejado}</div>
            <div>{realizado}</div>
          </Indic>
          <TabelaUlt>{ultimaatt}</TabelaUlt>
        </SmallContainer>
      </Scroll>
    </Container>
  );
}

export default Table;