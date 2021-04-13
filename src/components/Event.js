import React, {useState } from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, FormControl, FormGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Dropdown from 'react-dropdown'; //https://openbase.io/js/react-dropdown
import 'react-dropdown/style.css';
//import { DropDownList } from '@progress/kendo-react-dropdowns';
import './DirectContactFormat.css';
import {useStateValue} from './StateProvider';

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

import { connect } from "react-redux";


function Event(props) {

    const [startDate, setSelectedDate] = useState(new Date());
    const challengesList = ["Global Food Systems", "Community Vitality", "4H / Developing Tomorrow's Leaders", "Water", "Health"];
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

    function handleNameChange(event){
        setName(event.target.value)
        props.updateName(event.target.value)
    }

    function handleMaleTotalChange(event){
        setMaleTotal(event.target.value)
        props.updateMaleTotal(event.target.value)
    }

    function handleFemaleTotalChange(event){
        setFemaleTotal(event.target.value)
        props.updateFemaleTotal(event.target.value)
    }

    function handleOtherTotalChange(event){
        setOtherTotal(event.target.value)
        props.updateOtherTotal(event.target.value)
    }

    function handleHispanicTotalChange(event){
        setHispanicTotal(event.target.value)
        props.updateHispanicTotal(event.target.value)
    }

    function handleNonhispanicTotalChange(event){
        setNonhispanicTotal(event.target.value)
        props.updateNonhispanicTotal(event.target.value)
    }

    function handleUnknownTotalChange(event){
        setUnknownTotal(event.target.value)
        props.updateUnknownTotal(event.target.value)
    }


    function handleChallengesChange(event){
        console.log('triggered')
        console.log(event.value)
        setChallenges(event.value)
        props.updateChallenges(event.value)
    }

    function handleCommentChange(){
        var comment = document.getElementById("comment-box").value
        console.log(comment)
        setComment(comment)
        props.updateComment(comment)
    }
    //const gender_male = null;
    

    // handleChange(event){
    //     const name = event.target.name;
    //     const value = event.target.type === "checkbox" ? event.target.checked: event.target.value;
    //     this.setState({[name]:value});
    // }

    // function handleChange(){
    //     dispatch({ type: 'SET_MALE', male: "sample" });
    //     console.log(male);
    // }

    var currDate = new Date()

    return(
        <Container maxWidth = "xs">


        <div class = "center-items">       
            <h1>Event</h1>
        </div>
        
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
                placeholderText = {currDate.getMonth().toString()+"/"+currDate.getDay().toString()+"/"+currDate.getFullYear().toString()}
        />
        
        
        {/* Counties */}
            <br/>
            <label class = "counties-visited">County:</label>
            <div class = "counties-visited">
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
                 <FormControlLabel
                control={<Checkbox color="primary" />}
                label="OTH"
                labelPlacement="start"
                width= "5%"
                value = "OT"
                checked = {props.counties.counties.includes("OT")}
                onChange = {handleCountiesChange}
                />
            </FormGroup>
            </FormControl>
            </div>

            {/* Event Name */}
        <TextField
                label = "Event Name: "
                name = "name"
                margin = "normal"
                fullWidth
                variant = "outlined"
                value = {props.name.name}
                onChange = {handleNameChange}
        />

        {/* Crowd information */}
            <TextField
                label = "# Male: "
                name = "male"
                margin = "normal"
                variant = "outlined"
                fullWidth
                value = {props.maleTotal}
                onChange = {handleMaleTotalChange}
            />
        <br/>
            <TextField
                label = "# Female: "
                name = "female"
                margin = "normal"
                variant = "outlined"
                fullWidth
                value = {props.femaleTotal}
                onChange = {handleFemaleTotalChange}
            />
        <br/>
            <TextField
                label = "# Other: "
                name = "other"
                margin = "normal"
                variant = "outlined"
                fullWidth
                value = {props.otherTotal}
                onChange = {handleOtherTotalChange}
            />
        <br/>
            <TextField
                label = "# Hispanic: "
                name = "female"
                margin = "normal"
                variant = "outlined"
                fullWidth
                value = {props.hispanicTotal}
                onChange = {handleHispanicTotalChange}
            />
        <br/>
        <TextField
            label = "# Non-Hispanic: "
            name = "female"
            margin = "normal"
            variant = "outlined"
            fullWidth

            value = {props.nonhispanicTotal}
            onChange = {handleNonhispanicTotalChange}
        />
       
        <br/>
            <TextField
                label = "# Unknown: "
                name = "female"
                margin = "normal"
                variant = "outlined"
                fullWidth
                value = {props.unknownTotal}
                onChange = {handleUnknownTotalChange}
            />

        {/* Grand Challenges */}
        <br/>
        <br/>
            <Dropdown onChange = {handleChallengesChange} value = {props.challenges.challenges} options={challengesList} placeholder="Grand Challenges" />
        <br/>

        {/* Comments */}
        <h2>Comments:</h2>
        <div class="comments">
            <textarea onChange={handleCommentChange} value = {props.comment.comment} id = "comment-box" name="comment" cols="" rows="5" placeholder="Details / Collaborators or Notes"></textarea>
        </div>

        {/* Submit */}
        <br/>
            <br/>
            <div class = "submit-button">
            <Link to = "/event-summary">
                    <Button color = "black" variant="contained">
                        Review
                    </Button>            
                </Link>
            </div>
        </Container>
    );
}


const mapStateToProps = state => {
    return {
        counties: state.counties,
        name: state.name,
        date: state.date,
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

export default connect(mapStateToProps, mapDispatchToProps)(Event);
