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

function ReportSummary(props){

    var state = store.getState()
    
    var hoursWorked = state.workHours.workHours
    var sickOrVacation = state.sickOrVacation.sickOrVacation
    var leaveHours = state.leaveHours.leaveHours
    var miles = state.miles.miles
    var inofficeOrTele = state.inofficeOrTele.inofficeOrTele
    var counties = state.counties.counties
    var countiesString = ""
    for(var i = 0; i < counties.length; i++){
        countiesString += counties[i] + ", "
    }
    countiesString = countiesString.slice(0, -2)
    var date = state.date.date.toString()
    var comment = state.comment.comment

    return(

        <Container maxWidth = "xs">
        <h1>Report Summary: </h1>
        <h2>Date: {date} </h2>
        <h2>County: {countiesString} </h2>
        <h2>Hours Worked: {hoursWorked}</h2>
        <h2>Sick or Vacation: {sickOrVacation}</h2>
        <h2>Leave Hours: {leaveHours}</h2>
        <h2>Personal Miles: {miles}</h2>
        <h2>Inoffice or Telecommunication: {inofficeOrTele}</h2>
        <h2>Comments: {comment}</h2>

        <br/>
        <br/>
        <div class = "">
        <Link to = "/report">
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

export default ReportSummary;
