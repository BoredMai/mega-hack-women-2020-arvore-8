import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from 'components/header';
import LandingPage from 'components/landing-page';
import Storyteller from 'components/storyteller';

import 'styles/global.module.css';
import styles from './styles.module.css';

const App = (): JSX.Element => {
  return (
    <Router>
      <div className={styles.main}>
        <Header />
        <Switch>
          <Route path='/biblioteca'>
            <Storyteller />
          </Route>
          <Route path='/'>
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
