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
// import { updateCSVData } from '../redux/csvData/csvData.actions';
import { updateIndirectContactData } from '../redux/IndirectContactData/indirect-contact-data.actions';

import { updateDate } from '../redux/Date/date.actions';
import { updateMethodOfContact } from '../redux/MethodOfContact/method_of_contact.actions'
import { updateTopic } from '../redux/Topic/topic.actions'
import { updateChallenges } from '../redux/Challenges/challenges.actions'
import { updateComment } from '../redux/Comment/comment.actions'

function IndirectSummary(props){

    const [ updateIndirectContactData , setIndirectContactData ] = useState(null);

    const [startDate, setSelectedDate] = useState(new Date());
    const [ date , setDate ] = useState(null);
    const [ methodOfContact , setMethodOfContact ] = useState(null);
    const [ topic , setTopic ] = useState(null);
    const [ challenges , setChallenges ] = useState(null);
    const [ comment , setComment ] = useState(null);

    var state = store.getState()
    
    var dateSubmit = state.date.date.toString()
    var contactSubmit = state.methodOfContact.methodOfContact
    var topicSubmit = state.topic.topic
    var challengeSubmit = state.challenges.challenges
    var commentSubmit = state.comment.comment

    function updateExcel(){

        var entry = 
        [
            {value: dateSubmit }, 
            {value: contactSubmit, style: {font: {shadow: true}}},
            {value: topicSubmit, style: {font: {shadow: true}}},
            {value: challengeSubmit, style: {font: {shadow: true}}},
            {value: commentSubmit, style: {font: {shadow: true}}},
        ]
    
       // Adds entry to the array of entries
       var data = props.indirectContactData.indirectContactData
       data[0]['data'].push(entry)
       setIndirectContactData(data)
       props.updateIndirectContactData(data) 

       // Clear the state
       setDate("")
       props.updateDate("")
       setMethodOfContact("")
       props.updateMethodOfContact("")
       setTopic("")
       props.updateTopic("")
       setChallenges("")
       props.updateChallenges("")
       setComment("")
       props.updateComment("")
    }
    return(

        <Container maxWidth = "xs">
        <h1>Summary: </h1>
        <h2>Date: {dateSubmit} </h2>
        <h2>Method of Contact: {contactSubmit}</h2>
        <h2>Topic: {topicSubmit}</h2>
        <h2>Grand Challenges: {challengeSubmit}</h2>
        <h2>Comments: {commentSubmit}</h2>

        <br/>
        <br/>
        <div class = "">
        <Link to = "/indirect-contacts">
            <Button color = "black" variant="contained">
                Edit
            </Button>            
        </Link>
        </div>
        <br/>
            <br/>
            <div class = "">
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
        indirectContactData: state.indirectContactData,
        date: state.date,
        methodOfContact: state.methodOfContact,
        topic: state.topic,
        challenges: state.challenges,
        comment: state.comment,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateIndirectContactData: (indirectContactData) => dispatch(updateIndirectContactData(indirectContactData)),
        updateDate: (date) => dispatch(updateDate(date)),
        updateMethodOfContact: (methodOfContact) => dispatch(updateMethodOfContact(methodOfContact)),
        updateTopic: (topic) => dispatch(updateTopic(topic)),
        updateChallenges: (challenges) => dispatch(updateChallenges(challenges)),
        updateComment: (comment) => dispatch(updateComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndirectSummary);