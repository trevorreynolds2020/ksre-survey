import React from 'react';
import DirectContacts from './components/DirectContacts';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import DirectSummary from './components/DirectSummary';
import Report from './components/Report';
import IndirectContacts from './components/IndirectContacts';
import Event from './components/Event';
import Homepage from './components/Homepage';
import EventSummary from './components/EventSummary';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import countReducer from './reducers/countReducer';

// const store = createStore(countReducer)

// const mapStateToProps = state => {
//   return {
//     count: state
//   };
// };

// const testComponent = ({hours}) => (
//   <div>
//     <h1>{count}</h1>
//     <button onClick={submitButtonClick}>Decrement</button>
//     <button onClick={handleIncrementClick}>Increment</button>
//   </div>
// );


// // const testComponent = ({count, handleIncrementClick, handleDecrementClick}) => (
// //   <div>
// //     <h1>Helloworld React & Redux! {count}</h1>
// //     <button onClick={handleDecrementClick}>Decrement</button>
// //     <button onClick={handleIncrementClick}>Increment</button>
// //   </div>
// // );

// // const mapDispatchToProps = dispatch => {
// //   return {
// //     handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
// //     handleDecrementClick: () => dispatch({type: 'DECREMENT'})
// //   }
// // };

// const mapDispatchToProps = dispatch => {
//   return {
//     handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
//     handleDecrementClick: () => dispatch({type: 'DECREMENT'})
//   }
// };



function App() {

  return (
      <div className="App">
      <Router>
          <Switch>
            <Route path="/direct-summary/:id" exact component={DirectSummary}/>
            <Route path="/direct-summary" exact component={DirectSummary}/>
            <Route path="/direct-contacts" exact component={DirectContacts}/>
            <Route path="/indirect-contacts" exact component={IndirectContacts}/>
            <Route path="/report" exact component={Report}/>
            <Route path="/event" exact component={Event}/>
            <Route path="/event-summary" exact component={EventSummary}/>
            <Route path ="/" component={Homepage}></Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
