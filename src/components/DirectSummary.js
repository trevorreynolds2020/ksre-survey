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
import store from '../redux/store'
import { updateDirectContactData } from '../redux/DirectContactData/direct-contact-data.actions';
import { updateName } from "../redux/Name/name.actions";
import { updateCounties } from "../redux/Counties/counties.actions";
import { updateDate } from '../redux/Date/date.actions';
import { updateChallenges } from '../redux/Challenges/challenges.actions';
import { updateGender } from '../redux/Gender/gender.actions';
import { updateRace } from '../redux/Race/race.actions';
import { updateEthnicity } from '../redux/Ethnicity/ethnicity.actions';
import { updateComment } from '../redux/Comment/comment.actions';


function DirectSummary(props){

    const [ updateDirectContactData , setDirectContactData ] = useState(null);
   
    const [ name , setName ] = useState(null);
    const [ counties , setCounties ] = useState(null);
    const [ date , setDate ] = useState(null);
    const [ challenges , setChallenges ] = useState(null);
    const [ gender , setGender ] = useState(null);
    const [ race , setRace ] = useState(null);
    const [ ethnicity , setEthnicity ] = useState(null);
    const [ comment , setComment ] = useState(null);

    var state = store.getState()
    
    var nameSubmit = state.name.name
    var countiesSubmit = state.counties.counties
    var countiesString = ""
    for(var i = 0; i < countiesSubmit.length; i++){
        countiesString += countiesSubmit[i] + ", "
    }
    countiesString = countiesString.slice(0, -2)
    var dateSubmit = state.date.date.toString()
    var challengeSubmit = state.challenges.challenges
    var genderSubmit = state.gender.gender
    var raceSubmit = state.race.race
    var ethnicitySubmit = state.ethnicity.ethnicity
    var commentSubmit = state.comment.comment

    function updateExcel(){

        // Entry user is currently making
        var entry = 
        [
            {value: dateSubmit }, 
            {value: nameSubmit, style: {font: {shadow: true}}},
            {value: countiesString, style: {font: {shadow: true}}},
            {value: challengeSubmit, style: {font: {shadow: true}}},
            {value: genderSubmit, style: {font: {shadow: true}}},
            {value: raceSubmit, style: {font: {shadow: true}}},
            {value: ethnicitySubmit, style: {font: {shadow: true}}},
            {value: commentSubmit, style: {font: {shadow: true}}},
        ]

        // Adds entry to the array of entries
        var data = props.directContactData.directContactData
        data[0]['data'].push(entry)
        setDirectContactData(data)
        props.updateDirectContactData(data)

        
        //Clear the state
        setDate("")
        props.updateDate("")
        setName("")
        props.updateName("")
        setCounties([])
        props.updateCounties([])
        setChallenges("")
        props.updateChallenges("")
        setGender("")
        props.updateGender("")
        setRace("")
        props.updateRace("")
        setEthnicity("")
        props.updateEthnicity("")
        setComment("")
        props.updateComment("")

        console.log("running out of time")
        console.log("running out of time")
        console.log("running out of time")
        console.log("running out of time")
        console.log("running out of time")

    }

    return(

        <Container maxWidth = "xs">
        <h1>Summary: </h1>
        <h2>Date: {dateSubmit} </h2>
        <h2>Name: {nameSubmit}</h2>
        <h2>County: {countiesString} </h2>
        <h2>Grand Challenges: {challengeSubmit}</h2>
        <h2>Gender: {genderSubmit}</h2>
        <h2>Race: {raceSubmit}</h2>
        <h2>Ethnicity: {ethnicitySubmit}</h2>
        <h2>Comments: {commentSubmit}</h2>

        <br/>
        <br/>
        <div class = "">
        <Link to = "/direct-contacts">
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
        directContactData: state.directContactData,
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
        updateDirectContactData: (directContactData) => dispatch(updateDirectContactData(directContactData)),
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

export default connect(mapStateToProps, mapDispatchToProps)(DirectSummary);