import React, {useState } from 'react'
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'react-dropdown/style.css';
//import { DropDownList } from '@progress/kendo-react-dropdowns';
import './DirectContactFormat.css';
import { updateCSVData } from '../redux/csvData/csvData.actions';
import store from '../redux/store'
import './Site.css';
import './KSRE_logo.jpg';
import { CSVLink, CSVDownload } from "react-csv";
import {ExcelFile, ExcelSheet} from "react-export-excel";
import ReactExport from 'react-export-excel';
import {Img} from 'react-image'


import { connect } from "react-redux";



function Homepage(props){
    
    var state = store.getState()



    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

    var reportData = state.reportData.reportData
    var directData = state.directContactData.directContactData
    var indirectData = state.indirectContactData.indirectContactData
    var eventData = state.eventData.eventData


    return(

        <Container maxWidth = "xs">
                            

        {/* <img src = "KSRE_logo.jpg" alt="cat"/>
        <Img src={'KSRE_logo.jpg'}></Img> */}

        <div class = "main-menu">
        <h1 id = 'desktop-title'>KSRE Wildcat</h1>
        <ul>
        <h2 id = 'title'>KSRE Wildcat</h2>
        <li id = 'menu'>
            <Link to = "/report" id = 'menu-item'>
                Daily Reporting          
            </Link>
        </li>
        <br/>
        <li>
            <Link to = "/direct-contacts" id = 'menu-item'>
                Direct Contact
            </Link>
        </li>
        <br/>
        <li>
            <Link to = "/indirect-contacts" id = 'menu-item'>
                Indirect Contact         
            </Link>
        </li>
        <br/>
        <li>
            <Link to = "/event" id = 'menu-item'>
                Event
            </Link>
        </li>
        <br/>
        <li>
            <ExcelFile element={<a>Download Excel</a>} id = 'menu-item'>
                    <ExcelSheet dataSet={reportData} name="Daily Reporting"/>
                    <ExcelSheet dataSet={directData} name="Direct Contacts"/>
                    <ExcelSheet dataSet={indirectData} name="Indirect Contact"/>
                    <ExcelSheet dataSet={eventData} name="Event"/>
            </ExcelFile>
        </li>
        </ul>

        </div>
 
        </Container>
        
    )
}


export default Homepage;