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


function EventSummary(props){

    const [ csvData , setCSVData ] = useState(null);

    var state = store.getState()
    
    var counties = state.counties.counties
    var countiesString = ""
    for(var i = 0; i < counties.length; i++){
        countiesString += counties[i] + ", "
    }
    countiesString = countiesString.slice(0, -2)
    var date = state.date.date.toString()
    var male = state.male.maleTotal
    var female = state.female.femaleTotal
    var other = state.other.otherTotal
    var hispanic = state.hispanic.hispanicTotal
    var nonhispanic = state.nonhispanic.nonhispanicTotal
    var unknown = state.unknown.unknownTotal
    var comment = state.comment.comment

    function updateCSV(){
        var entry = [
            "E", //type
            date, //date
            null, //name
            null, //contact
            null, //gender
            null, //race
            null, //ethnicity
            countiesString, //counties,
            null, //challenges,
            null, //topic
            male, //males
            female, //females
            other, //other
            hispanic, //hispanic
            nonhispanic, //non-hispanic
            unknown, //unknown
            null, //hours worked
            null, //sick or vacation
            null, //leave hours
            null, //miles driven
            null, //inoffice or remote
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
        <h1>Summary: </h1>
        <h2>Date: {date} </h2>
        <h2>Counties: {countiesString} </h2>
        <h2>Male: {male}</h2>
        <h2>Female: {female}</h2>
        <h2>Other: {other}</h2>
        <h2>Hispanic: {hispanic}</h2>
        <h2>Non-Hispanic: {nonhispanic}</h2>
        <h2>Unknown: {unknown}</h2>
        <h2>Comments: {comment}</h2>

        <br/>
        <br/>
        <div class = "">
        <Link to = "/event">
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

export default connect(mapStateToProps, mapDispatchToProps)(EventSummary);