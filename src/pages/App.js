import React from 'react';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import Youtube from './Youtube';
import GoogleMap from './GoogleMap';
import './App.css';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Youtube}/>
        <Route path="/map" component={GoogleMap}/>
      </Switch>
    </Provider>
  );
}

export default App;
