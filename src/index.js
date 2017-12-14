import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './index.css';
import FrontPage from './pages/FrontPage';
import SignUp from './pages/SignUp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(  
<BrowserRouter>
  <Switch>
    <Route exact path='/' component={FrontPage} />
    <Route exact path='/signup' component={SignUp} />
  </Switch>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
