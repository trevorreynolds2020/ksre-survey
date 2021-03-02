import React, {useState} from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControl, FormGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dropdown from 'react-dropdown'; //https://openbase.io/js/react-dropdown
import 'react-dropdown/style.css';
//import { DropDownList } from '@progress/kendo-react-dropdowns';
import './DirectContactFormat.css';
//import {configureStore} from "react-redux";
//import {connect} from "react-redux";
import { connect } from "react-redux";
import { Button} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { updateName } from "../redux/Name/name.actions";
import { updateCounties } from "../redux/Counties/counties.actions";
import { updateDate } from '../redux/Date/date.actions';
import { updateChallenges } from '../redux/Challenges/challenges.actions';
import { updateGender } from '../redux/Gender/gender.actions';
import { updateRace } from '../redux/Race/race.actions';
import { updateEthnicity } from '../redux/Ethnicity/ethnicity.actions';
import { updateComment } from '../redux/Comment/comment.actions';



function DirectContacts(props){

    const challengesList = ["Community Vitality / VC","Developing Tomorrows Leaders","Global Health Systems","Health","Water"];
    const genderList = [ "Male", "Female", "other"];
    const raceList = ["American Indian or Alaska Native","Asian","Black or African American","Native Hawaiian or Other Pacific Islander","White"]
    const ethnicityList = ["Hispanic or Latino or Spanish Origin","Not Hispanic or Latino or Spanish Origin"]

    const [ name , setName ] = useState(null);
    const [ counties , setCounties ] = useState(null);
    const [ date , setDate ] = useState(null);
    const [ challenges , setChallenges ] = useState(null);
    const [ gender , setGender ] = useState(null);
    const [ race , setRace ] = useState(null);
    const [ ethnicity , setEthnicity ] = useState(null);
    const [ comment , setComment ] = useState(null);




    function dispatchRedux(){
        
    }

    function handleNameChange(event){
        console.log(event.target.value)
        setName(event.target.value)
        props.updateName(event.target.value)
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

    function handleDateChange(date){
        setDate(date)
        props.updateDate(date)
    }

    function handleCommentChange(){
        var comment = document.getElementById("comment-box").value
        console.log(comment)
        setComment(comment)
        props.updateComment(comment)
    }

    function handleChallengesChange(event){
        console.log('triggered')
        console.log(event.value)
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

    return(
        <Container maxWidth = "xs">
            <h1>Direct Contact</h1>
        <form onSubmit = {dispatchRedux}>

          {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
          <br/>
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

            
            {/* redux for database stuff*/}
            </div>

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

            {/* Counties */}
            <br/>
            <br/> 
            <label class = "counties-visited">Counties Visited:</label>
            <div class = "counties-visited">
            <FormControl
                component="fieldset"
                
             >
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
                <textarea onChange={handleCommentChange} value = {props.comment.comment} id = "comment-box" name="comment" cols="" rows="5"></textarea>
            </div>
            
            {/* Submit */}
            <br/>
            <br/>
            <div>
   
                <Link to = "/direct-summary">
                    <Button color = "black" variant="contained">
                        Submit
                    </Button>            
                </Link>
            </div>
        
                
          
            </form>  
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
    updateChallenges: (challenges) => dispatch(updateChallenges(challenges)),
    updateGender: (gender) => dispatch(updateGender(gender)),
    updateRace: (race) => dispatch(updateRace(race)),
    updateEthnicity: (ethnicity) => dispatch(updateEthnicity(ethnicity)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectContacts);
