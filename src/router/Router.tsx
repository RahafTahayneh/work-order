import React from 'react';
import {
    Redirect, Route, Router, Switch,
} from 'react-router-dom';
import { observer } from 'mobx-react';
import {Main} from '../pages/main'
import {Profile} from '../pages/profile';
import { Layout } from '../layout'
import { routes } from './routes';
import history from './history';

const RouterComponent: React.FC = observer(() => (
    <Router history={history}>
        <Layout>
            <Switch>
                <Route key="main" path={routes.main.getPath()} exact component={Main} />
                <Route key="profile" path={routes.workerProfile.getPath()} exact component={Profile} />
                <Redirect to={routes.main.getPath()} />
            </Switch>
        </Layout>
    </Router>
));

export default RouterComponent;
