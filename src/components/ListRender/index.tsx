import React from 'react';
import SelectInput from '../../components/SelectInputPendente'
import {
    Container,
    Title,
    SubTitle,
    Engrenagem,
    Content,
    Filters,
    Input} from './styles';
import engrenagem from '../../asserts/engrenagem.svg';
import List from '../List';



const ListRender: React.FC = () => (

        <Container>
          
          <Title>
            <SubTitle>
              <h2>Planos de ação</h2>
              <h4>Atualizações</h4>
            </SubTitle>
            <Engrenagem src={engrenagem} alt="Engrenagem"/>
          </Title>
          <Input>
          <input placeholder="Pesquisar"></input>
          </Input>
          <SelectInput/>
          <Content>
            <List
              planoAcao="Nome do plano de ação"
              responsavel="Responsável: Bruno Barros"
              acao="Pendente"
              data="10:45 22/02/2021"
            />
            <List
              planoAcao="Nome do plano de ação"
              responsavel="Responsável: Bruno Barros"
              acao="Pendente"
              data="10:45 22/02/2021"
            />
            <List
              planoAcao="Nome do plano de ação"
              responsavel="Responsável: Bruno Barros"
              acao="Pendente"
              data="10:45 22/02/2021"
            />
            <List
              planoAcao="Nome do plano de ação"
              responsavel="Responsável: Bruno Barros"
              acao="Pendente"
              data="10:45 22/02/2021"
            />
            <List
              planoAcao="Nome do plano de ação"
              responsavel="Responsável: Bruno Barros"
              acao="Pendente"
              data="10:45 22/02/2021"
            />
            <List
              planoAcao="Nome do plano de ação"
              responsavel="Responsável: Bruno Barros"
              acao="Pendente"
              data="10:45 22/02/2021"
            />
          </Content>
        </Container>
    
)

export default ListRender;