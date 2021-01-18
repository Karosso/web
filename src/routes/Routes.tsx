import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AppProvider } from '../aplplication/context/appContext/AppContext';
import { Home } from '../pages/Home/Home';

export default function Routes() {

  return (
    <BrowserRouter>
      <AppProvider>
        <Switch>
          <Route path={"/"} component={Home} />
        </Switch>
      </AppProvider>
    </BrowserRouter>
  );
}
