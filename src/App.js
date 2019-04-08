import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Index from './pages/index';
import Error from './pages/error';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Index}/>
      <Route path="*" component={Error} />
    </Switch>
</BrowserRouter>
);
export default App;


