import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

class AppRouter extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`${url}/`}
          component={asyncComponent(() => import('../Widgets/index.js'))}
        />
        <Route
          exact
          path={`${url}/users`}
          component={asyncComponent(() => import('../UserTable'))}
        />
      </Switch>
    );
  }
}

export default AppRouter;
