import { combineReducers } from 'redux';


import nameReducer from './Name/name.reducer';
import countiesReducer from './Counties/counties.reducer';
import dateReducer from './Date/date.reducer';
import challengesReducer from './Challenges/challenges.reducers';
import genderReducer from './Gender/gender.reducers';
import raceReducer from './Race/race.reducers';
import ethnicityReducer from './Ethnicity/ethnicity.reducers';
import commentReducer from './Comment/comment.reducers';


const rootReducer = combineReducers({
    name: nameReducer,
    counties: countiesReducer,
    date: dateReducer,
    challenges: challengesReducer,
    gender: genderReducer,
    race: raceReducer,
    ethnicity: ethnicityReducer,
    comment: commentReducer,
});

export default rootReducer;