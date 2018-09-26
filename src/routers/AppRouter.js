import React from 'react';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import { Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRouter';
import PublicRoute from './PublicRouter';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);
export default AppRouter;
