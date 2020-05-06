import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout  from './components/Layout';
import { BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import Pricing from './components/princing/Pricing';
import Dashboard from './components/dashboard/Dashboard';
import Signin from './components/signIn/Signin';
import FormEmbed from './components/formEmbed/FormEmbed';
import Map from './components/map/Map';
import Landing  from './components/landing/Landing';
import Stores from './components/stores/Stores';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import PublicRoute from './components/publicRoute/PublicRoute';

import { createStore,applyMiddleware,compose } from 'redux';
import { Provider} from 'react-redux';
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
  )
);


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <BrowserRouter>
     
      <Provider store={store}>
      <Layout>
      <Switch>
          <PublicRoute  component={Landing} restricted={true} path="/" exact />
          <PublicRoute  component={Signin} restricted={true} path="/signin" exact />
          <PublicRoute  component={Login} restricted={true} path="/register" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <PrivateRoute component={FormEmbed} path="/questions" exact />
          <PrivateRoute component={Map} path="/map" exact />
          <PrivateRoute component={Stores} path="/stores" exact />
            </Switch>
      </Layout>
     </Provider>
 
     </BrowserRouter>
    );
  }
}
