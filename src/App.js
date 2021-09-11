import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import OpenTheme from './pages/OpenTheme';
import Main from './pages';
import moment from 'moment';

// import Index from './pages';
import './App.scss';

export default function App() {
  const idLocale = require('moment/locale/id');
  moment.locale('id', idLocale);
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' exact component={Main} />
        <Route path='/:name?' exact component={OpenTheme} />
        {/* <Route path='/' exact component={OpenTheme} /> */}
      </Switch>
    </BrowserRouter>
  );
}
