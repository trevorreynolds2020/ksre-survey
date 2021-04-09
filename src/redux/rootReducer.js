import { combineReducers } from 'redux';


import nameReducer from './Name/name.reducer';
import countiesReducer from './Counties/counties.reducer';
import emailReducer from './Email/email.reducers';
import phoneNumberReducer from './PhoneNumber/phone-number.reducers';
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
import inofficeOrRemoteReducer from './InofficeOrRemote/inoffice-or-remote.reducers';
import leaveHoursReducer from './LeaveHours/leave-hours.reducers';
import milesReducer from './Miles/miles.reducers';
import sickOrVacationReducer from './SickOrVacation/sick-or-vacation.reducers';
import workHoursReducer from './WorkHours/work-hours.reducers';
import csvDataReducer from './csvData/csvData.reducers';
import reportDataReducer from './ReportData/report-data.reducers';
import directContactDataReducer from './DirectContactData/direct-contact-data.reducers';
import indirectContactDataReducer from './IndirectContactData/indirect-contact-data.reducers';
import eventDataReducer from './EventData/event-data.reducers';








const rootReducer = combineReducers({
    name: nameReducer,
    counties: countiesReducer,
    email: emailReducer,
    phoneNumber: phoneNumberReducer,
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
    inofficeOrRemote: inofficeOrRemoteReducer,
    leaveHours: leaveHoursReducer,
    miles: milesReducer,
    sickOrVacation: sickOrVacationReducer,
    workHours: workHoursReducer,
    csvData: csvDataReducer,
    reportData: reportDataReducer,
    directContactData: directContactDataReducer,
    indirectContactData: indirectContactDataReducer,
    eventData: eventDataReducer,
});

export default rootReducer;