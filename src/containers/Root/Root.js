import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Layout from '../../components/Layout';
import Page404 from '../../components/Page404';

// Use React Loadable for routes
import Home from '../Home';

const history = createBrowserHistory({
  basename: '/twitter',
});

const Root = () => (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/404" component={Page404} />
        <Redirect to="/404" />
      </Switch>
    </Layout>
  </ConnectedRouter>
);

export default Root;
