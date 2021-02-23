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

import { updateCSVData } from '../redux/csvData/csvData.actions';
import store from '../redux/store'
// import { TextsmsTwoTone } from '@material-ui/icons';

function ReportSummary(props){

    const [ csvData , setCSVData ] = useState(null);

    var state = store.getState()
    
    var hoursWorked = state.workHours.workHours
    var sickOrVacation = state.sickOrVacation.sickOrVacation
    var leaveHours = state.leaveHours.leaveHours
    var miles = state.miles.miles
    var inofficeOrRemote = state.inofficeOrRemote.inofficeOrRemote
    var counties = state.counties.counties
    var countiesString = ""
    for(var i = 0; i < counties.length; i++){
        countiesString += counties[i] + ", "
    }
    countiesString = countiesString.slice(0, -2)
    var date = state.date.date.toString()
    var comment = state.comment.comment

    function updateCSV(){
        // New entry
        //csvData: [["Type", "Date", "Name","Contact","Gender","Race","Ethnicity","Counties", "Challenges","Topic","Males","Females","Other","Hispanic","Non-Hispanic","Unknown","Hours Worked","Sick or Vacation","Leave Hours","Miles Driven","Remote","Comments"]],
        var entry = [
            "R", //type
            date, //date
            null, //name
            null, //contact
            null, //gender
            null, //race
            null, //ethnicity
            countiesString, //counties,
            null, //challenges,
            null, //topic            
            null, //males
            null, //females
            null, //other
            null, //hispanic
            null, //non-hispanic
            null, //unknown
            hoursWorked, //hours worked
            sickOrVacation, //sick or vacation
            leaveHours, //leave hours
            miles, //miles driven
            inofficeOrRemote, //inoffice or remote
            comment //comments
        ]
        //Current CSV
        var csv = props.csvData.csvData
        csv.push(entry)
        setCSVData(csv)
        props.updateCSVData(csv)
    }

    return(

        <Container maxWidth = "xs">
        <h1>Report Summary: </h1>
        <h2>Date: {date} </h2>
        <h2>County: {countiesString} </h2>
        <h2>Hours Worked: {hoursWorked}</h2>
        <h2>Sick or Vacation: {sickOrVacation}</h2>
        <h2>Leave Hours: {leaveHours}</h2>
        <h2>Personal Miles: {miles}</h2>
        <h2>Inoffice or Remote: {inofficeOrRemote}</h2>
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
                <Button color = "black" variant="contained" onClick={()=>{updateCSV()}}>
                    Submit
                </Button>            
            </Link>
        </div>
    </Container>
    )
}

const mapStateToProps = state => {
    return {
        csvData: state.csvData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCSVData: (csvData) => dispatch(updateCSVData(csvData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportSummary);