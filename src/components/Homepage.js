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
    

    return(

        <Container maxWidth = "xs">
        {/* <img src = "KSRE_logo.jpg" alt="cat"/>
        <Img src={'KSRE_logo.jpg'}></Img> */}
        <div class = "main-menu">
            <h1>KSU Research</h1>
        <ul>
        <li>
            <Link to = "/report">
                Report          
            </Link>
        </li>
        <br/>
        <li>
            <Link to = "/direct-contacts">
                Direct Contact
            </Link>
        </li>
        <br/>
        <li>
            <Link to = "/indirect-contacts">
                Indirect Contact         
            </Link>
        </li>
        <br/>
        <li>
            <Link to = "/event">
                Event
            </Link>
        </li>
        <br/>
        <li>
            <ExcelFile element={<a>Download Excel</a>}>
                    <ExcelSheet dataSet={reportData} name="Report"/>
                    <ExcelSheet dataSet={directData} name="Direct Contacts"/>
                    <ExcelSheet dataSet={indirectData} name="Indirect Contact"/>
            </ExcelFile>
        </li>
        </ul>

        </div>
        {/* Add settings with logout option */}

        {/* Submit
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
                <ExcelFile element={<button>Download Excel</button>}>
                    <ExcelSheet dataSet={reportData} name="Report"/>
                    <ExcelSheet dataSet={directData} name="Direct Contacts"/>
                    <ExcelSheet dataSet={indirectData} name="Indirect Contact"/>
                </ExcelFile>
            </div>
        <br/> */}
 
        </Container>
        
    )
}


export default Homepage;