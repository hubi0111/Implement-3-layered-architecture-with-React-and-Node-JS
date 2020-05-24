import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import GetOrg from './components/GetOrg';
import SubmitOrg from './components/SubmitOrg';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/submit" component={SubmitOrg}/>
             <Route path="/getOrg" component={GetOrg}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;