import React from 'react'
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

function IndirectSummary(props){

    var state = store.getState()
    
    var date = state.date.date.toString()
    var contact = state.methodOfContact.methodOfContact
    var topic = state.topic.topic
    var challenge = state.challenges.challenges
    var comment = state.comment.comment

    return(

        <Container maxWidth = "xs">
        <h1>Summary: </h1>
        <h2>Date: {date} </h2>
        <h2>Method of Contact: {contact}</h2>
        <h2>Topic: {topic}</h2>
        <h2>Grand Challenges: {challenge}</h2>
        <h2>Comments: {comment}</h2>

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
                <Button color = "black" variant="contained">
                    Submit
                </Button>            
            </Link>
        </div>
    </Container>
    )
}

export default IndirectSummary;
