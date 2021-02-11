import React, {useState } from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, FormControl, FormGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './ReportStyle.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import { updateDate } from '../redux/Date/date.actions';
import { updateCounties } from "../redux/Counties/counties.actions";
import { updateWorkHours } from "../redux/WorkHours/work-hours.actions";
import { updateSickOrVacation } from "../redux/SickOrVacation/sick-or-vacation.actions";
import { updateLeaveHours } from "../redux/LeaveHours/leave-hours.actions";
import { updateMiles } from "../redux/Miles/miles.actions";
import { updateInofficeOrTele } from "../redux/InofficeOrTele/inoffice-or-tele.actions";
import { updateComment } from '../redux/Comment/comment.actions';

import { connect } from "react-redux";

//import Check from 'carbon-components/Checkbox'; plz work


function Report(props){

    const [startDate, setSelectedDate] = useState(new Date());

    const [ date , setDate ] = useState(null);
    const [ counties , setCounties ] = useState(null);
    const [ workHours , setWorkHours ] = useState(null);
    const [ sickOrVacation , setSickOrVacation ] = useState(null);
    const [ leaveHours , setLeaveHours ] = useState(null);
    const [ miles , setMiles ] = useState(null);
    const [ inofficeOrTele , setInofficeOrTele ] = useState(null);
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

    function handleInofficeOrTeleChange(event){
        setInofficeOrTele(event.target.value)
        props.updateInofficeOrTele(event.target.value)
    }

    function handleCommentChange(){
        var comment = document.getElementById("comment-box").value
        console.log(comment)
        setComment(comment)
        props.updateComment(comment)
    }

    return(
        <Container maxWidth = "xs">

                


            <h1 class = "title"> Report </h1>

           
            {/* Date */}

            <div className = "datePickerContainer">
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
                
            />
            
            </div>
            {/* Counties */}
            <FormControl
                component="fieldset"
            >
                 {/*RL take out*/}
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
            
            <FormControl component="fieldset">
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel onChange = {handleSickOrVacationChange} value="sick" control={<Radio color="primary" />} label="Sick" />
                    <FormControlLabel onChange = {handleSickOrVacationChange} value="vacation" control={<Radio color="primary" />} label="Vacation" />
                </RadioGroup>
            </FormControl>

            <TextField
                label = "Leave Hours: "
                name = "personalMilesDriven"
                //value = {formData.personalMilesDriven}
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
                //value = {formData.personalMilesDriven}
                margin = "normal"
                variant = "outlined"
                fullWidth
                value = {props.miles.miles}
                onChange = {handleMilesChange}
            />

            {/* Inoffice or Telecommunication */}
            <FormControl component="fieldset">
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel onChange = {handleInofficeOrTeleChange} value="inoffice" control={<Radio color="primary" />} label="Inoffice" />
                    <FormControlLabel onChange = {handleInofficeOrTeleChange} value="telecommunication" control={<Radio color="primary" />} label="Telecommunication" />
                </RadioGroup>
            </FormControl>


            {/* Comments */}
            <h2>Comments:</h2>
            <div class="comments">
                <textarea onChange={handleCommentChange} value = {props.comment.comment} id = "comment-box" name="comment" cols="" rows="5"></textarea>
            </div>

            {/* Renders the Summary page with routing */}

            {/* Take info from fields and pass to database, generate id and render same component with unique id */}
            
            {/* Submit */}
            <br/>
            <br/>
            <div class = "submit-button">
            <Link to = "/report-summary">
                <Button color = "black" variant="contained">
                            Submit
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
        inofficeOrTele: state.inofficeOrTele,
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
    updateInofficeOrTele: (inofficeOrTele) => dispatch(updateInofficeOrTele(inofficeOrTele)),
    updateComment: (comment) => dispatch(updateComment(comment)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Report);
