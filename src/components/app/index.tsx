import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from 'components/header';
import LandingPage from 'components/landing-page';
import Library from 'components/library';
import Storyteller from 'components/storyteller';

import styles from './styles.module.css';

const App = (): JSX.Element => {
  const user = {
    first: 'Clarice',
    last: 'Lispector',
  };

  return (
    <Router>
      <div className={styles.main}>
        <Header user={user} />
        <Switch>
          <Route path='/biblioteca/:story'>
            <Storyteller username={user.first} />
          </Route>
          <Route path='/biblioteca'>
            <Library />
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
