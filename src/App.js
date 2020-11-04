import React from 'react';
import DirectContacts from './components/DirectContacts';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import DirectSummary from './components/DirectSummary';
import Report from './components/Report';
import IndirectContacts from './components/IndirectContacts';
import Event from './components/Event';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/direct-summary/:id" exact component={DirectSummary}/>
          <Route path="/direct-summary" exact component={DirectSummary}/>
          
        </Switch>
      <Event/>
      </Router>
    </div>
  );
}

export default App;
