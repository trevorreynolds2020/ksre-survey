import React, {useState } from 'react'
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'react-dropdown/style.css';
//import { DropDownList } from '@progress/kendo-react-dropdowns';
import './DirectContactFormat.css';
import { updateCSVData } from '../redux/csvData/csvData.actions';
import store from '../redux/store'


import { CSVLink, CSVDownload } from "react-csv";
import {ExcelFile, ExcelSheet} from "react-export-excel";
import ReactExport from 'react-export-excel';

import { connect } from "react-redux";



function Homepage(props){
    
    var state = store.getState()

    const multiDataSet = [
        {
            columns: ["Headings", "Text Style", "Colors"],
            data: [
                [
                    {value: "H1", style: {font: {sz: "24", bold: true}}},
                    {value: "Bold", style: {font: {bold: true}}},
                    {value: "Red", style: {fill: {patternType: "solid", fgColor: {rgb: "FFFF0000"}}}},
                ],
                [
                    {value: "H2", style: {font: {sz: "18", bold: true}}},
                    {value: "underline", style: {font: {underline: true}}},
                    {value: "Blue", style: {fill: {patternType: "solid", fgColor: {rgb: "FF0000FF"}}}},
                ],
                [
                    {value: "H3", style: {font: {sz: "14", bold: true}}},
                    {value: "italic", style: {font: {italic: true}}},
                    {value: "Green", style: {fill: {patternType: "solid", fgColor: {rgb: "FF00FF00"}}}},
                ],
                [
                    {value: "H4", style: {font: {sz: "12", bold: true}}},
                    {value: "strike", style: {font: {strike: true}}},
                    {value: "Orange", style: {fill: {patternType: "solid", fgColor: {rgb: "FFF86B00"}}}},
                ],
                [
                    {value: "H5", style: {font: {sz: "10.5", bold: true}}},
                    {value: "outline", style: {font: {outline: true}}},
                    {value: "Yellow", style: {fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}},
                ],
                [
                    {value: "H6", style: {font: {sz: "7.5", bold: true}}},
                    {value: "shadow", style: {font: {shadow: true}}},
                    {value: "Light Blue", style: {fill: {patternType: "solid", fgColor: {rgb: "FFCCEEFF"}}}}
                ]
            ]
        }
    ];

    console.log("Real")
    console.log(multiDataSet)


    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;


    var directData = state.directContactData.directContactData
    console.log(directData)
    

    // Make redux variable
    // On submit page pull in everything as an array in order
    // Append that array to csvData

    //make a dictionary
    //on export click
    // take dictionary
    // name: blah
    // date: blah

    // (1) Make redux dictionary
    // (2) First key -> type (direct,indirect)
        // Second key -> key/values (name: blah, date: blah)
    // (3) On each screen where you submit information add key -> value
    // (4) Write a converter dictionary -> csv
        //(1) Loop through every value in dictionary
        //(2) Append key values inorder to csvData array 


    // var csv = props.csvData.csvData;
    // console.log(csv)


    // // console.log(csv.length)
    // // csv.push({
    // //     key:   "keyName",
    // //     value: "the value"
    // // })
    // setCSVData(csv)
    // props.updateCSVData(csv)
    // console.log(csv)

    
    // const csvData = [
    //     ["type", "date", "name","counties", "challenges","gender","race","ethnicity","method of contact","topic","males","females","other","hispanic","non-hispanic","unknown","hours worked","sick or vacation","leave hours","miles driven","inoffice or tele","comments"],
    //     ["direct", "null", "ah@smthing.co.com"],
    //     // ["indirect", "something", "rl@smthing.co.com"],
    //     // ["event", "Min l3b", "ymin@cocococo.com"]
    //   ];

    // var multiDataSet = state.csvData.csvData

    return(
        <Container>

            {/* Add settings with logout option */}

        {/* Submit */}
        <br/>
            
            <br/>
            <div class = "">
            <Link to = "/report">
                <Button color = "black" variant="contained">
                    Report
                </Button>            
            </Link>
            </div>
        <br/>
            <br/>
            <div class = "">
            <Link to = "/direct-contacts">
                <Button color = "black" variant="contained">
                    Direct Contact
                </Button>            
            </Link>
            </div>
        <br/>
            <br/>
            <div class = "">
            <Link to = "/indirect-contacts">
                <Button color = "black" variant="contained">
                    Indirect Contact
                </Button>            
            </Link>
            </div>
        <br/>
            <br/>
            <div class = "">
            <Link to = "/event">
                <Button color = "black" variant="contained">
                    Event
                </Button>            
            </Link>
            </div>
            

            <div>
                <ExcelFile element={<button>Download Data With Styles</button>}>
                    <ExcelSheet dataSet={directData} name="Direct Contacts"/>
                    {/* <ExcelSheet dataSet={multiDataSet} name="Organization1"/> */}
                </ExcelFile>
            </div>
        
        
        <br/>
        
        
        </Container>
    )
}


export default Homepage;