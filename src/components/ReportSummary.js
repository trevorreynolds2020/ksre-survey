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
import { updateReportData } from '../redux/ReportData/report-data.actions';


function ReportSummary(props){

    const [ updateReportData , setReportData ] = useState(null);

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

    function updateExcel(){
        // New entry
        var entry = 
        [
            {value: date }, 
            {value: countiesString, style: {font: {shadow: true}}},
            {value: hoursWorked, style: {font: {shadow: true}}},
            {value: sickOrVacation, style: {font: {shadow: true}}},
            {value: leaveHours, style: {font: {shadow: true}}},
            {value: miles, style: {font: {shadow: true}}},
            {value: inofficeOrRemote, style: {font: {shadow: true}}},
            {value: comment, style: {font: {shadow: true}}},
        ]
        
        // Adds entry to the array of entries
       var data = props.reportData.reportData
       data[0]['data'].push(entry)
       setReportData(data)
       props.updateReportData(data) 
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
        reportData: state.reportData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateReportData: (reportData) => dispatch(updateReportData(reportData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportSummary);