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
import { updateDate } from '../redux/Date/date.actions';
import { updateCounties } from "../redux/Counties/counties.actions";
import { updateWorkHours } from "../redux/WorkHours/work-hours.actions";
import { updateSickOrVacation } from "../redux/SickOrVacation/sick-or-vacation.actions";
import { updateLeaveHours } from "../redux/LeaveHours/leave-hours.actions";
import { updateMiles } from "../redux/Miles/miles.actions";
import { updateInofficeOrRemote } from "../redux/InofficeOrRemote/inoffice-or-remote.actions";
import { updateComment } from '../redux/Comment/comment.actions';


function ReportSummary(props){

    const [ updateReportData , setReportData ] = useState(null);

    const [ date , setDate ] = useState(null);
    const [ counties , setCounties ] = useState(null);
    const [ workHours , setWorkHours ] = useState(null);
    const [ sickOrVacation , setSickOrVacation ] = useState(null);
    const [ leaveHours , setLeaveHours ] = useState(null);
    const [ miles , setMiles ] = useState(null);
    const [ inofficeOrRemote , setInofficeOrRemote ] = useState(null);
    const [ comment , setComment ] = useState(null);

    var state = store.getState()
    
    var hoursWorkedSubmit = state.workHours.workHours
    var sickOrVacationSubmit = state.sickOrVacation.sickOrVacation
    var leaveHoursSubmit = state.leaveHours.leaveHours
    var milesSubmit = state.miles.miles
    var inofficeOrRemoteSubmit = state.inofficeOrRemote.inofficeOrRemote
    var countiesSubmit = state.counties.counties
    var countiesString = ""
    for(var i = 0; i < countiesSubmit.length; i++){
        countiesString += countiesSubmit[i] + ", "
    }
    countiesString = countiesString.slice(0, -2)
    var dateSubmit = state.date.date.toString()
    var commentSubmit = state.comment.comment

    function updateExcel(){
        // New entry
        var entry = 
        [
            {value: dateSubmit }, 
            {value: countiesString, style: {font: {shadow: true}}},
            {value: hoursWorkedSubmit, style: {font: {shadow: true}}},
            {value: sickOrVacationSubmit, style: {font: {shadow: true}}},
            {value: leaveHoursSubmit, style: {font: {shadow: true}}},
            {value: milesSubmit, style: {font: {shadow: true}}},
            {value: inofficeOrRemoteSubmit, style: {font: {shadow: true}}},
            {value: commentSubmit, style: {font: {shadow: true}}},
        ]
        
        // Adds entry to the array of entries
       var data = props.reportData.reportData
       data[0]['data'].push(entry)
       setReportData(data)
       props.updateReportData(data) 

       //Clear the state
       var emptyString = ""
       var emptyArray = []
       setDate(emptyString)
       props.updateDate(emptyString)
       setCounties(emptyArray)
       props.updateCounties(emptyArray)
       setWorkHours(emptyString)
       props.updateWorkHours(emptyString)
       setSickOrVacation(emptyString)
       props.updateSickOrVacation(emptyString)
       setLeaveHours(emptyString)
       props.updateLeaveHours(emptyString)
       setMiles(emptyString)
       props.updateMiles(emptyString)
       setInofficeOrRemote(emptyString)
       props.updateInofficeOrRemote(emptyString)
       setComment(emptyString)
       props.updateComment(emptyString)

    }

    return(

        <Container maxWidth = "xs">
        <h1>Report Summary: </h1>
        <h2>Date: {dateSubmit} </h2>
        <h2>County: {countiesString} </h2>
        <h2>Hours Worked: {hoursWorkedSubmit}</h2>
        <h2>Sick or Vacation: {sickOrVacationSubmit}</h2>
        <h2>Leave Hours: {leaveHoursSubmit}</h2>
        <h2>Personal Miles: {milesSubmit}</h2>
        <h2>Inoffice or Remote: {inofficeOrRemoteSubmit}</h2>
        <h2>Comments: {commentSubmit}</h2>

        <br/>
        <br/>
        <div class = "center-button">
        <Link to = "/report">
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
        reportData: state.reportData,
        counties: state.counties,
        date: state.date,
        workHours: state.workHours,
        sickOrVacation: state.sickOrVacation,
        leaveHours: state.leaveHours,
        miles: state.miles,
        inofficeOrRemote: state.inofficeOrRemote,
        comment: state.comment,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateReportData: (reportData) => dispatch(updateReportData(reportData)),
        updateCounties: (counties) => dispatch(updateCounties(counties)),
        updateDate: (date) => dispatch(updateDate(date)),
        updateWorkHours: (workHours) => dispatch(updateWorkHours(workHours)),
        updateSickOrVacation: (sickOrVacation) => dispatch(updateSickOrVacation(sickOrVacation)),
        updateLeaveHours: (leaveHours) => dispatch(updateLeaveHours(leaveHours)),
        updateMiles: (miles) => dispatch(updateMiles(miles)),
        updateInofficeOrRemote: (inofficeOrRemote) => dispatch(updateInofficeOrRemote(inofficeOrRemote)),
        updateComment: (comment) => dispatch(updateComment(comment)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportSummary);