import React from 'react';
import {
  Container,
  Pendencias,
  Acao} from './styles'


interface IList {
  planoAcao: string;
  responsavel: string;
  acao: string;
  data: string;
}

const List: React.FC<IList> = ({
  planoAcao,
  responsavel,
  acao,
  data
}) => {
  return(
    <Container>
      <div>
        <span>{planoAcao}</span>
        <small>{responsavel}</small>
      </div>
      <Pendencias>
        <Acao>
          <p>{acao}</p>
        </Acao>
        <small>{data}</small>
      </Pendencias>
    </Container>
  );
}

export default List;