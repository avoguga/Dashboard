import React from 'react';
import SelectInput from '../../components/SelectInputDiario'
import {
    Container,
    Title,
    SubTitle,
    Content,
    Input,
    SubInput} from './styles';
import engrenagem from '../../asserts/engrenagem.svg';
import Table from '../Table';



const TableRender: React.FC = () => (

        <Container>
          
          <Title>
            <h2>Inspeções agendadas</h2>
            <SubInput>
              <SelectInput/>
            </SubInput>
          </Title>
          <Input>
          <input placeholder="Pesquisar"></input>
          </Input>
          
          <Content>
            <Table
              nome="Nome"
              planejado="Planejado"
              realizado="Realizado"
              ultimaatt="Atualizações"
              
            />
            <Table
              nome="Larissa Silva Goncalves"
              planejado="10"
              realizado="10"
              ultimaatt="08:10h 10/10/2010"
            />
            <Table
              nome="Lucas Silva Santos"
              planejado="10"
              realizado="10"
              ultimaatt="08:10h 10/10/2010"
            />
            <Table
              nome="Raissa Oliveira Araujo"
              planejado="10"
              realizado="10"
              ultimaatt="08:10h"
            />
            <Table
              nome="Leila Dias Costa"
              planejado="8"
              realizado="8"
              ultimaatt="08:10h"
            />
            <Table
              nome="Vitória Sousa Cavalcanti"
              planejado="0"
              realizado="0"
              ultimaatt="08:10h"
            />
            <Table
              nome="Emily Araujo Oliveira"
              planejado="4"
              realizado="4"
              ultimaatt="08:10h"
            />
            <Table
              nome="Nicolas Pereira Sousa"
              planejado="2"
              realizado="2"
              ultimaatt="08:10h"
            />
            <Table
              nome="Laura Castro Gomes"
              planejado="2"
              realizado="2"
              ultimaatt="08:10h"
            />
          </Content>
        </Container>
    
)

export default TableRender;