import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/:name?' exact component={Welcome} />
      </Switch>
    </BrowserRouter>
  );
}
