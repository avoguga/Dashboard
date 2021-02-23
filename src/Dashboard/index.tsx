import React from 'react';
import HistoryBox from '../components/HistoryBox'
import ContentHeader from '../components/ContentHeader'

import Routes from '../routes';

import { 
    Container,
    Content, 
    Content1, 
    Content2, 
    TableContent
} from './styles';

import PieeChart from '../components/PieChart';
import PieeChart2 from '../components/PieChart2';
import PieeChart3 from '../components/PieChart3';
import ListRender from '../components/ListRender';
import TableRender from '../components/TableRender';


const Dashboard: React.FC = () => {
    return (
        <Container>
            <ContentHeader/>
            <Content>
                <HistoryBox/>
                <PieeChart/>
            </Content>
            <Content1>
                <Content2>
                    <PieeChart2/>
                    <PieeChart3/>
                    <TableRender/>
                </Content2>
                <ListRender/>
            </Content1>
                
            
            

        </Container>
    );
}

export default Dashboard;