import React, { PureComponent } from 'react';
import {Container, Controllers, Engrenagem, Grafico} from './styles'
import SelectInput from '../../components/SelectInputDiario'
import engrenagem from '../../asserts/engrenagem.svg'
import { 
    BarChart, 
    Bar, 
    Cell, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
} from 'recharts';

const data = [
    {
      name: 'Informação A',
      IR: 4000,
      PC: 2400,
      amt: 2400,
    },
    {
      name: 'Informação B',
      IR: 3000,
      PC: 1398,
      amt: 2210,
    },
    {
      name: 'Informação C',
      IR: 2000,
      PC: 9800,
      amt: 2290,
    },
    {
      name: 'Informação D',
      IR: 2780,
      PC: 3908,
      amt: 2000,
    },
    {
      name: 'Informação E',
      IR: 1890,
      PC: 4800,
      amt: 2181,
    },
    {
      name: 'Informação F',
      IR: 2390,
      PC: 3800,
      amt: 2500,
    },
    {
      name: 'Informação G',
      IR: 3490,
      PC: 4300,
      amt: 2100,
    },
  ];


const HistoryBox: React.FC = () => (
    
        <Container>
          
            <h2>Histórico de eventos</h2>
            <Controllers>
                <SelectInput/>
                <Engrenagem src={engrenagem} alt="Logo TrackingTrade"/>
            </Controllers>
            <Grafico>
              <ResponsiveContainer>
                  <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3"/>
                      <Tooltip/>
                      <Legend/>
                      <Bar dataKey="PC" fill="#4B9EEA" name="Planos de ação criados" />
                      <Bar dataKey="IR" fill="#C00808" name="Inspeções realizadas"/>
                      <Bar dataKey="PC" fill="#A91B79" name="Informação 03" />
                  </BarChart>
              </ResponsiveContainer>
            </Grafico>

            
        </Container>
    
)

export default HistoryBox;