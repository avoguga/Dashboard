import React from 'react';
import {
  Container,
  Title,
  SubTitle,
  Input,
  Scroll} from './styles'
import SelectInput from '../SelectInputDiario'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name:string, planejado:number, realizado:number, att:string) {
  return { name, planejado, realizado, att};
}

const rows = [
  createData('Larissa Silva Goncalves', 10, 10, '08:10h 10/10/2010'),
  createData('Lucas Silva Santos', 10, 10, '08:10h 10/10/2010'),
  createData('Raissa Oliveira Araujo', 10, 10, '08:10h'),
  createData('Leila Dias Costa', 8, 8, '08:10h'),
  createData('Vitória Sousa Cavalcanti', 0, 0, '08:10h'),
  createData('Emily Araujo Oliveira', 4, 4, '08:10h'),
  createData('Nicolas Pereira Sousa', 2, 2, '08:10h'),
  createData('Laura Castro Gomes', 2, 2, '08:10h'),
];

const Taable: React.FC = () => (

        <Container>
          
        <Title>
          <SubTitle>
            <h2>Inspeções agendadas</h2>
            <div><SelectInput/></div>
          </SubTitle>
          <Input>
            <input placeholder="Pesquisar"></input>
          </Input>
        </Title>
        <Scroll>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell align="right">Planejado</TableCell>
                  <TableCell align="right">Realizado</TableCell>
                  <TableCell align="right">Última Atualização</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.planejado}</TableCell>
                    <TableCell align="right">{row.realizado}</TableCell>
                    <TableCell align="right">{row.att}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scroll>
            
        </Container>
    
)

export default Taable;