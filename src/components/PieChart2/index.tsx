import React from 'react';
import {
  Container,
  Title,
  Engrenagem,
  SubTitle } from './styles'
import { ResponsivePie } from '@nivo/pie'
import engrenagem from '../../asserts/engrenagem.svg'

const data = [
  {
    id: "Realizados",
    label: "Realizados",
    value: 410,
  },
  {
    id: "Em aberto",
    label: "Em aberto",
    value: 175,
  },
  {
    id: "Não realizados",
    label: "Não realizados",
    value: 128,
  }
];

const PieeChart2: React.FC = () => (

        <Container>
          
        
        <Title>
          <SubTitle>
            <h2>Inpseções</h2>
            <h4>Status do dia</h4>
          </SubTitle>
          <Engrenagem src={engrenagem} alt="Engrenagem"/>
        </Title>
        
        
        <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.75}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'category10' }}
        borderWidth={1}
        borderColor= {{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        enableRadialLabels={false}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
            
        </Container>
    
)

export default PieeChart2;