import React from 'react';

// import DirectContacts from './components/DirectContacts';
import DirectContactscopy from './components/DirectContactscopy';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

// import DirectSummary from './components/DirectSummary';
import DirectSummary from './components/DirectSummary';

import Report from './components/Report';
import IndirectContacts from './components/IndirectContacts';
import Event from './components/Event';
import Homepage from './components/Homepage';
import EventSummary from './components/EventSummary';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

function App() {

  return (
      <div className="App">
      <Router>
          <Switch>
            <Route path="/direct-summary/:id" exact component={DirectSummary}/>
            <Route path="/direct-summary" exact component={DirectSummary}/>
            <Route path="/direct-contacts" exact component={DirectContactscopy}/>
            <Route path="/indirect-contacts" exact component={IndirectContacts}/>
            <Route path="/report" exact component={Report}/>
            <Route path="/event" exact component={Event}/>
            <Route path="/event-summary" exact component={EventSummary}/>
            <Route path ="/" exact component={Homepage}></Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
