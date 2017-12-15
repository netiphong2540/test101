import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Stats from './components/Stats';
import Character from './components/Character';
import CharacterList from './components/CharacterList';
import AddCharacter from './components/AddCharacter';

import auth from './../../auth/initAuth'
//Routes
import NotFound from './NotFound'
import App from './../App';
import PageOne from './../PageOne'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/stats' component={Stats} />
    <Route path='/characters/:id' component={Character} />
    <Route path='/add' component={AddCharacter} />
    <Route path=':category' component={CharacterList}>
    </Route>
  </Route>
);

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.loggedIn() ? (
      React.createElement(component, props)
    ) : (
      <Redirect to="/NotFound" />
    )
  )}/>
)
const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />  
        <PrivateRoute path="/PageOne" component={PageOne} />  
        <Route path="/NotFound" component={NotFound} />  
        <Route component={NotFound} />  
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
