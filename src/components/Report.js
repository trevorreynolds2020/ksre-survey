import React, {useState } from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, FormControl, FormGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import '../styles/ReportStyle.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import { updateDate } from '../redux/Date/date.actions';
import { updateCounties } from "../redux/Counties/counties.actions";
import { updateWorkHours } from "../redux/WorkHours/work-hours.actions";
import { updateSickOrVacation } from "../redux/SickOrVacation/sick-or-vacation.actions";
import { updateLeaveHours } from "../redux/LeaveHours/leave-hours.actions";
import { updateMiles } from "../redux/Miles/miles.actions";
import { updateInofficeOrRemote } from "../redux/InofficeOrRemote/inoffice-or-remote.actions";
import { updateComment } from '../redux/Comment/comment.actions';

import { connect } from "react-redux";

/*
    A report records the hours works, leave hours, and miles driven on a given day.
    Doesn't currently differentiate between sick/vacation hours in the spreadsheet.
    Same applies to personal miles/remote
*/

function Report(props){

    const [startDate, setSelectedDate] = useState(new Date());

    const [ date , setDate ] = useState(startDate);
    const [ counties , setCounties ] = useState(null);
    const [ workHours , setWorkHours ] = useState(null);
    const [ sickOrVacation , setSickOrVacation ] = useState(null);
    const [ leaveHours , setLeaveHours ] = useState(null);
    const [ miles , setMiles ] = useState(null);
    const [ inofficeOrRemote , setInofficeOrRemote ] = useState(null);
    const [ comment , setComment ] = useState(null);

    function handleDateChange(date){
        setDate(date)
        props.updateDate(date)
    }

    function handleCountiesChange(event){
        var counties = props.counties.counties
        if(event.target.checked){
            counties.push(event.target.value)
        }
        else{
            const index = counties.indexOf(event.target.value);
            counties.splice(index,1);
        }
        console.log(counties)
        // console.log(event.target.value)
        setCounties(counties)
        props.updateCounties(counties)
    }

    function handleWorkHoursChange(event){
        setWorkHours(event.target.value)
        props.updateWorkHours(event.target.value)
    }

    function handleSickOrVacationChange(event){
        console.log(event.target.value)
        setSickOrVacation(event.target.value)
        props.updateSickOrVacation(event.target.value)
    }

    function handleLeaveHoursChange(event){
        setLeaveHours(event.target.value)
        props.updateLeaveHours(event.target.value)
    }

    function handleMilesChange(event){
        console.log(event.target.value)
        setMiles(event.target.value)
        props.updateMiles(event.target.value)
    }

    function handleInofficeOrRemoteChange(event){
        setInofficeOrRemote(event.target.value)
        props.updateInofficeOrRemote(event.target.value)
    }

    function handleCommentChange(){
        var comment = document.getElementById("comment-box").value
        console.log(comment)
        setComment(comment)
        props.updateComment(comment)
    }
    
    var currDate = new Date()


    return(
        <Container maxWidth = "xs">

                

            <div class = "center-items">
                <h1 class = "title"> Daily Reporting </h1>
            </div>
            
            {/* Date */}
            <label>Select Date: </label>
            <DatePicker  
                selected = {props.date.date} // current date in DatePicker
                onChange = {handleDateChange} // when date changes update the in the DatePicker
                isClearable // X button - clears date
                withPortal // cover screen with calender
                margin = "normal"
                name = "date"
                maxWidth = "auto"
                id = "datepicker"
                className = "datePicker"
                value = {startDate}
                placeholderText = {currDate.getMonth().toString()+"/"+currDate.getDay().toString()+"/"+currDate.getFullYear().toString()}
                
            />
            
                  {/* Counties */}
                  <br/>
            <br/> 
            <label class = "counties-visited">Counties Visited:</label>
            <div class = "counties-visited">
            <FormControl component="fieldset">
                <FormGroup row >
                
                    <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="CR"
                    labelPlacement="start"
                    width= "20%"
                    value = "CR"
                    checked = {props.counties.counties.includes("CR")}
                    onChange = {handleCountiesChange}
                    />
                    <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="LB"
                    labelPlacement="start"
                    width= "20%"
                    value = "LB"
                    checked = {props.counties.counties.includes("LB")}
                    onChange = {handleCountiesChange}
                    />
                    <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="MG"
                    labelPlacement="start"
                    width= "20%"
                    value = "MG"
                    checked = {props.counties.counties.includes("MG")}
                    onChange = {handleCountiesChange}
                    />
                    <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="WL"
                    labelPlacement="start"
                    width= "20%"
                    value = "WL"
                    checked = {props.counties.counties.includes("WL")}
                    onChange = {handleCountiesChange}
                    />
                </FormGroup>
            </FormControl>
            </div>


            {/* Hours Worked */}
            <TextField
                label = "Hours Worked: "
                name = "hoursWorked"
                //value = {formData.hoursWorked}
                margin = "normal"
                variant = "outlined"
                fullWidth
                value = {props.workHours.workHours}
                onChange = {handleWorkHoursChange}
            />

            {/* Vacation or Sick */}
            
            <div class = "center-items">
            <FormControl component="fieldset">
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel onChange = {handleSickOrVacationChange} value="sick" control={<Radio color="primary" />} label="Sick" />
                    <FormControlLabel onChange = {handleSickOrVacationChange} value="vacation" control={<Radio color="primary" />} label="Vacation" />
                </RadioGroup>
            </FormControl>
            </div>
            
            {/* Leave Hours */}
            <TextField
                label = "Leave Hours: "
                name = "personalMilesDriven"
                margin = "normal"
                variant = "outlined"
                autoComplete = "off"
                fullWidth
                value = {props.leaveHours.leaveHours}
                onChange = {handleLeaveHoursChange}
            />

            {/* Miles Driven */}
            <TextField
                label = "Personal Miles Driven: "
                name = "miles"
                margin = "normal"
                variant = "outlined"
                fullWidth
                value = {props.miles.miles}
                onChange = {handleMilesChange}
            />

            {/* Inoffice or Remote */}
            <div class = "center-items">
            <FormControl component="fieldset">
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel onChange = {handleInofficeOrRemoteChange} value="inoffice" control={<Radio color="primary" />} label="In office" />
                    <FormControlLabel onChange = {handleInofficeOrRemoteChange} value="remote" control={<Radio color="primary" />} label="Remote" />
                </RadioGroup>
            </FormControl>
            </div>

            {/* Comments */}
            <h2>Comments:</h2>
            <div class="comments">
                <textarea onChange={handleCommentChange} value = {props.comment.comment} id = "comment-box" name="comment" cols="" rows="5" placeholder="Details / Collaborators or Notes"></textarea>
            </div>
            
            {/* Submit */}
            <br/>
            <br/>
            <div class = "submit-button">
            <Link to = "/report-summary">
                <Button color = "black" variant="contained">
                        Review
                </Button>            
            </Link>
            </div>
        </Container>
        
    )
}



const mapStateToProps = state => {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Report);
