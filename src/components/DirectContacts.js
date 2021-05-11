import React, {useState} from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControl, FormGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../styles/DirectContactFormat.css';

import { connect } from "react-redux";
import { Button} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { updateName } from "../redux/Name/name.actions";
import { updatePhoneNumber } from "../redux/PhoneNumber/phone-number.actions";
import { updateEmail } from "../redux/Email/email.actions";
import { updateCounties } from "../redux/Counties/counties.actions";
import { updateDate } from '../redux/Date/date.actions';
import { updateChallenges } from '../redux/Challenges/challenges.actions';
import { updateGender } from '../redux/Gender/gender.actions';
import { updateRace } from '../redux/Race/race.actions';
import { updateEthnicity } from '../redux/Ethnicity/ethnicity.actions';
import { updateComment } from '../redux/Comment/comment.actions';

/* 
    A direct contact is anyone they interact directly with.
    For example, if they meet with someone inperson and talk about crop yields
    they would enter that persons name, (optionally) phone number, email, etc
    and in the comments probably talk about the reason for meeting the person.
    
    Gender, race, ethnicity are manditory requirements from the government. They
    submitted this info to continue getting funding.
*/

function DirectContacts(props){

    const challengesList = ["Global Food Systems", "Community Vitality", "4H / Developing Tomorrow's Leaders", "Water", "Health"];
    const genderList = [ "Male", "Female", "other"];
    const raceList = ["American Indian or Alaska Native","Asian","Black or African American","Native Hawaiian or Other Pacific Islander","White"]
    const ethnicityList = ["Hispanic or Latino or Spanish Origin","Not Hispanic or Latino or Spanish Origin"]
    const methodOfContact = ["In-person", "Email", "Phone", "Video"]

    const [ name , setName ] = useState(null);
    const [ phoneNumber , setPhoneNumber ] = useState(null);
    const [ email , setEmail ] = useState(null);
    const [ counties , setCounties ] = useState(null);
    const [ date , setDate ] = useState(null);
    const [ challenges , setChallenges ] = useState(null);
    const [ gender , setGender ] = useState(null);
    const [ race , setRace ] = useState(null);
    const [ ethnicity , setEthnicity ] = useState(null);
    const [ comment , setComment ] = useState(null);



    function handleNameChange(event){
        setName(event.target.value)
        props.updateName(event.target.value)
    }

    function handlePhoneNumberChange(event){
        setPhoneNumber(event.target.value)
        props.updatePhoneNumber(event.target.value)
    }

    function handleEmailChange(event){
        setEmail(event.target.value)
        props.updateEmail(event.target.value)
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
        setCounties(counties)
        props.updateCounties(counties)
    }

    function handleDateChange(date){
        setDate(date)
        props.updateDate(date)
    }

    function handleCommentChange(){
        var comment = document.getElementById("comment-box").value
        setComment(comment)
        props.updateComment(comment)
    }

    function handleChallengesChange(event){
        setChallenges(event.value)
        props.updateChallenges(event.value)
    }
    
    function handleGenderChange(event){
        setGender(event.value)
        props.updateGender(event.value)
    }

    function handleRaceChange(event){
        setRace(event.value)
        props.updateRace(event.value)
    }

    function handleEthnicityChange(event){
        setEthnicity(event.value)
        props.updateEthnicity(event.value)
    }

    var currDate = new Date()

    return(
        <Container maxWidth = "xs">
            <div class = "center-items">
                <h1>Direct Contact</h1>
            </div>

            <br/>
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
            

            {/* Name */}
            <br/>
            <TextField
                label = "Name: "
                name = "name"
                margin = "normal"
                variant = "outlined"
                fullWidth
                value = {props.name.name}
                onChange = {handleNameChange}
            />

            {/* Phone Number */}
            <br/>
            <TextField
                label = "Phone Number: "
                name = "phoneNumber"
                margin = "normal"
                variant = "outlined"
                fullWidth
                value = {props.phoneNumber}
                onChange = {handlePhoneNumberChange}
            />

            {/* Email */}
            <br/>
            <TextField
                label = "Email: "
                name = "email"
                margin = "normal"
                variant = "outlined"
                fullWidth
                value = {props.email}
                onChange = {handleEmailChange}
            />

            {/* Counties */}
            <br/>
            <br/> 
            <label class = "counties-visited">County:</label>
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

            {/* Grand Challenges, Gender, Race, Ethnicity*/}
            <br/>
            <Dropdown onChange = {handleChallengesChange} value = {props.challenges.challenges} options={challengesList} placeholder="Grand Challenges" />
            <br/>
            <Dropdown onChange = {handleGenderChange} value = {props.gender.gender} options={genderList} value={"Gender"} name = "comment" placeholder="Select an option" />
            <br/>
            <Dropdown onChange = {handleRaceChange} value = {props.race.race} options={raceList} value={"Race"} placeholder="Select an option" />
            <br/>
            <Dropdown onChange = {handleEthnicityChange} value = {props.ethnicity.ethnicity} options={ethnicityList} value={"Ethnicity"} placeholder="Select an option" />

            {/* Comments */}
            <h2>Comments:</h2>
            <div class="comments">
                <textarea onChange={handleCommentChange} value = {props.comment.comment} id = "comment-box" name="comment" cols="" rows="5" placeholder="Details / Collaborators or Notes"></textarea>
            </div>
            
            {/* Submit */}
            <br/>
            <br/>
            <div class = "submit-button">
   
                <Link to = "/direct-summary">
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
        name: state.name,
        counties: state.counties,
        date: state.date,
        challenges: state.challenges,
        gender: state.gender,
        race: state.race,
        ethnicity: state.ethnicity,
        comment: state.comment,
    }
}

const mapDispatchToProps = dispatch => {
return {
    updateName: (name) => dispatch(updateName(name)),
    updateCounties: (counties) => dispatch(updateCounties(counties)),
    updateDate: (date) => dispatch(updateDate(date)),
    updatePhoneNumber: (phoneNumber) => dispatch(updatePhoneNumber(phoneNumber)),
    updateEmail: (email) => dispatch(updateEmail(email)),
    updateChallenges: (challenges) => dispatch(updateChallenges(challenges)),
    updateGender: (gender) => dispatch(updateGender(gender)),
    updateRace: (race) => dispatch(updateRace(race)),
    updateEthnicity: (ethnicity) => dispatch(updateEthnicity(ethnicity)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectContacts);
