import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import ListOrg from './components/ListOrg';
import CreateOrg from './components/CreateOrg';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/submit" component={CreateOrg}/>
             <Route path="/listOrg" component={ListOrg}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;