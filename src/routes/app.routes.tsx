import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from '../Dashboard';
import SingIn from '../SingIn';
import Layout from '../components/Layout';
const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/SingIn" exact component={SingIn}/>
        </Switch>
    </Layout>
);

export default AppRoutes;