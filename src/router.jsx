import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewLogin from './page/NewLogin';
import Register from './page/Register';

const router = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={NewLogin} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Login} /> {/* Default route */}
      </Switch>
    </Router>
  );
}

export default router;
