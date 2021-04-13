import React, {useState } from 'react'
import Container from '@material-ui/core/Container';
import 'react-datepicker/dist/react-datepicker.css';
import { Button} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Dropdown from 'react-dropdown'; //https://openbase.io/js/react-dropdown
import 'react-dropdown/style.css';
//import { DropDownList } from '@progress/kendo-react-dropdowns';
import './DirectContactFormat.css';
import {connect} from "react-redux";
import store from '../redux/store'
import { updateCSVData } from '../redux/csvData/csvData.actions';
import { updateEventData } from '../redux/EventData/event-data.actions';

import { updateDate } from '../redux/Date/date.actions';
import { updateName } from '../redux/Name/name.actions';
import { updateCounties } from "../redux/Counties/counties.actions";
import { updateMaleTotal } from '../redux/Male/male.actions';
import { updateFemaleTotal } from '../redux/Female/female.actions';
import { updateOtherTotal } from '../redux/Other/other.actions';
import { updateHispanicTotal } from '../redux/Hispanic/hispanic.actions';
import { updateNonhispanicTotal } from '../redux/Nonhispanic/nonhispanic.actions';
import { updateUnknownTotal } from '../redux/Unknown/unknown.actions';
import { updateChallenges } from '../redux/Challenges/challenges.actions';
import { updateComment } from '../redux/Comment/comment.actions';

function EventSummary(props){

    const [ updateEventData , setEventData ] = useState(null);

    const [ date , setDate ] = useState(null);
    const [ name , setName ] = useState(null);
    const [ counties , setCounties ] = useState(null);
    const [ maleTotal , setMaleTotal ] = useState(null);
    const [ femaleTotal , setFemaleTotal ] = useState(null);
    const [ otherTotal , setOtherTotal ] = useState(null);
    const [ hispanicTotal , setHispanicTotal ] = useState(null);
    const [ nonhispanicTotal , setNonhispanicTotal ] = useState(null);
    const [ unknownTotal , setUnknownTotal ] = useState(null);
    const [ challenges , setChallenges ] = useState(null);
    const [ comment , setComment ] = useState(null);

    var state = store.getState()
    
    var countiesSubmit = state.counties.counties
    var countiesString = ""
    for(var i = 0; i < countiesSubmit.length; i++){
        countiesString += countiesSubmit[i] + ", "
    }
    countiesString = countiesString.slice(0, -2)
    var dateSubmit = state.date.date.toString()
    var nameSubmit = state.name.name
    var maleSubmit = state.male.maleTotal
    var femaleSubmit = state.female.femaleTotal
    var otherSubmit = state.other.otherTotal
    var hispanicSubmit = state.hispanic.hispanicTotal
    var nonhispanicSubmit = state.nonhispanic.nonhispanicTotal
    var unknownSubmit = state.unknown.unknownTotal
    var challengeSubmit = state.challenges.challenges
    var commentSubmit = state.comment.comment

    function updateExcel(){

        var entry = 
        [
            {value: dateSubmit }, 
            {value: countiesString, style: {font: {shadow: true}}},
            {value: nameSubmit},
            {value: maleSubmit, style: {font: {shadow: true}}},
            {value: femaleSubmit, style: {font: {shadow: true}}},
            {value: otherSubmit, style: {font: {shadow: true}}},
            {value: hispanicSubmit, style: {font: {shadow: true}}},
            {value: nonhispanicSubmit, style: {font: {shadow: true}}},
            {value: unknownSubmit, style: {font: {shadow: true}}},
            {value: challengeSubmit, style: {font: {shadow: true}}},
            {value: commentSubmit, style: {font: {shadow: true}}},
        ]
    
       // Adds entry to the array of entries
       var data = props.eventData.eventData
       data[0]['data'].push(entry)
       setEventData(data)
       props.updateEventData(data) 

       // Resets redux variables to original values
       setDate("")
       props.updateDate("")
       setCounties([])
       props.updateCounties([])
       setName("")
       props.updateName("")
       setMaleTotal("")
       props.updateMaleTotal("")
       setFemaleTotal("")
       props.updateFemaleTotal("")
       setOtherTotal("")
       props.updateOtherTotal("")
       setHispanicTotal("")
       props.updateHispanicTotal("")
       setNonhispanicTotal("")
       props.updateNonhispanicTotal("")
       setUnknownTotal("")
       props.updateUnknownTotal("")
       setChallenges("")
       props.updateChallenges("")
       setComment("")
       props.updateComment("")

    }

    return(

        <Container maxWidth = "xs">
        <h1>Summary: </h1>
        <h2>Date: {dateSubmit} </h2>
        <h2>Counties: {countiesString} </h2>
        <h2>Event Name: {nameSubmit} </h2>
        <h2>Male: {maleSubmit}</h2>
        <h2>Female: {femaleSubmit}</h2>
        <h2>Other: {otherSubmit}</h2>
        <h2>Hispanic: {hispanicSubmit}</h2>
        <h2>Non-Hispanic: {nonhispanicSubmit}</h2>
        <h2>Unknown: {unknownSubmit}</h2>
        <h2>Challenges: {challengeSubmit}</h2>
        <h2>Comments: {commentSubmit}</h2>

        <br/>
        <br/>
        <div class = "center-button">
        <Link to = "/event">
            <Button color = "black" variant="contained">
                Edit
            </Button>            
        </Link>
        </div>
        <br/>
            <br/>
            <div class = "center-button">
            <Link to = "/">
                <Button color = "black" variant="contained" onClick={()=>{updateExcel()}}>
                    Submit
                </Button>            
            </Link>
        </div>
    </Container>
    )
}

const mapStateToProps = state => {
    return {
        eventData: state.eventData,
        counties: state.counties,
        date: state.date,
        name: state.name,
        maleTotal: state.maleTotal,
        femaleTotal: state.femaleTotal,
        otherTotal: state.otherTotal,
        hispanicTotal: state.hispanicTotal,
        nonhispanicTotal: state.nonhispanicTotal,
        unknownTotal: state.unknownTotal,
        comment: state.comment,
        challenges: state.challenges,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateEventData: (eventData) => dispatch(updateEventData(eventData)),
        updateCounties: (counties) => dispatch(updateCounties(counties)),
        updateDate: (date) => dispatch(updateDate(date)),
        updateName: (name) => dispatch(updateName(name)),
        updateMaleTotal: (maleTotal) => dispatch(updateMaleTotal(maleTotal)),
        updateFemaleTotal: (femaleTotal) => dispatch(updateFemaleTotal(femaleTotal)),
        updateOtherTotal: (otherTotal) => dispatch(updateOtherTotal(otherTotal)),
        updateHispanicTotal: (hispanicTotal) => dispatch(updateHispanicTotal(hispanicTotal)),
        updateNonhispanicTotal: (nonhispanicTotal) => dispatch(updateNonhispanicTotal(nonhispanicTotal)),
        updateUnknownTotal: (unknownTotal) => dispatch(updateUnknownTotal(unknownTotal)),
        updateComment: (comment) => dispatch(updateComment(comment)),
        updateChallenges: (challenges) => dispatch(updateChallenges(challenges)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventSummary);