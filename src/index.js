import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

// IMPORT REACT ROUTER <<<<<<<<<<<<<<<<<<<<<<
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// IMPORT COMPONENTS <<<<<<<<<<<<<<<<<<<<<<
import Explorer from './components/Explorer.js';
import Details from './components/Details.js';
import People from './components/People.js';
import Starships from './components/Starships.js';
import Films from './components/Films.js';
import BaseLayout from './components/Layout.js';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <div>
        <Switch>
          <Route exact path="/" component={Explorer} />
          <Route exact path="/Explorer" component={Explorer} />
          <Route path="/Details" component={Details}/>
          <Route path="/Starships" component={Starships}/>
          <Route path="/Films" component={Films}/>
          <Route path="/Characters" component={People}/>
        </Switch>
      </div>
    </BaseLayout>
  </BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
