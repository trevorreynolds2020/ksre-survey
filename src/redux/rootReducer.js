import { combineReducers } from 'redux';


import nameReducer from './Name/name.reducer';
import countiesReducer from './Counties/counties.reducer';
import dateReducer from './Date/date.reducer';
import challengesReducer from './Challenges/challenges.reducers';
import genderReducer from './Gender/gender.reducers';
import raceReducer from './Race/race.reducers';
import ethnicityReducer from './Ethnicity/ethnicity.reducers';
import commentReducer from './Comment/comment.reducers';
import methodOfContactReducer from './MethodOfContact/method_of_contact.reducers';
import topicReducer from './Topic/topic.reducers';
import femaleReducer from './Female/female.reducers';
import maleReducer from './Male/male.reducers';
import hispanicReducer from './Hispanic/hispanic.reducers';
import nonhispanicReducer from './Nonhispanic/nonhispanic.reducers';
import otherReducer from './Other/other.reducers';
import unknownReducer from './Unknown/unknown.reducers';
import inofficeOrTeleReducer from './InofficeOrTele/inoffice-or-tele.reducers';
import leaveHoursReducer from './LeaveHours/leave-hours.reducers';
import milesReducer from './Miles/miles.reducers';
import sickOrVacationReducer from './SickOrVacation/sick-or-vacation.reducers';
import workHoursReducer from './WorkHours/work-hours.reducers';







const rootReducer = combineReducers({
    name: nameReducer,
    counties: countiesReducer,
    date: dateReducer,
    challenges: challengesReducer,
    gender: genderReducer,
    race: raceReducer,
    ethnicity: ethnicityReducer,
    comment: commentReducer,
    methodOfContact: methodOfContactReducer,
    topic: topicReducer,
    female: femaleReducer,
    male: maleReducer,
    hispanic: hispanicReducer,
    nonhispanic: nonhispanicReducer,
    other: otherReducer,
    unknown: unknownReducer,
    inofficeOrTele: inofficeOrTeleReducer,
    leaveHours: leaveHoursReducer,
    miles: milesReducer,
    sickOrVacation: sickOrVacationReducer,
    workHours: workHoursReducer,

});

export default rootReducer;