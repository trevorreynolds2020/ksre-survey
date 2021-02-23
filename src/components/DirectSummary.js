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
import { updateCSVData } from '../redux/csvData/csvData.actions';
import { updateDirectContactData } from '../redux/DirectContactData/direct-contact-data.actions';


function DirectSummary(props){

    const [ updateDirectContactData , setDirectContactData ] = useState(null);


    var state = store.getState()
    
    var name = state.name.name
    var counties = state.counties.counties
    var countiesString = ""
    for(var i = 0; i < counties.length; i++){
        countiesString += counties[i] + ", "
    }
    countiesString = countiesString.slice(0, -2)
    var date = state.date.date.toString()
    var challenge = state.challenges.challenges
    var gender = state.gender.gender
    var race = state.race.race
    var ethnicity = state.ethnicity.ethnicity
    var comment = state.comment.comment

    function updateExcel(){

        // Entry user is currently making
        var entry = 
        [
            {value: date }, 
            {value: name, style: {font: {shadow: true}}},
            {value: countiesString, style: {font: {shadow: true}}},
            {value: challenge, style: {font: {shadow: true}}},
            {value: gender, style: {font: {shadow: true}}},
            {value: race, style: {font: {shadow: true}}},
            {value: ethnicity, style: {font: {shadow: true}}},
            {value: comment, style: {font: {shadow: true}}},
        ]

        // Adds entry to the array of entries
        var data = props.directContactData.directContactData
        data[0]['data'].push(entry)
        setDirectContactData(data)
        props.updateDirectContactData(data)
    }

    return(

        <Container maxWidth = "xs">
        <h1>Summary: </h1>
        <h2>Date: {date} </h2>
        <h2>Name: {name}</h2>
        <h2>County: {countiesString} </h2>
        <h2>Grand Challenges: {challenge}</h2>
        <h2>Gender: {gender}</h2>
        <h2>Race: {race}</h2>
        <h2>Ethnicity: {ethnicity}</h2>
        <h2>Comments: {comment}</h2>

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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateDirectContactData: (directContactData) => dispatch(updateDirectContactData(directContactData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectSummary);