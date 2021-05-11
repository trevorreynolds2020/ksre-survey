import React from 'react'
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'react-dropdown/style.css';
import '../styles/DirectContactFormat.css';
import store from '../redux/store'
import '../styles/Site.css';
import ReactExport from 'react-export-excel';
import logo from '../resources/logos/ksre.png';

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
            
        <div class = "main">
        <div id = 'logo-container-mobile'>
            <img src = {logo} id = 'mobile-logo' width = "400vh"/>
        </div>
        <div class = "main-menu">
            <img src = {logo} id = 'desktop-logo' width = "400vh"/>
        <ul>
        
        <br/>
        <br/>
        <br/>
        <br/>

        {/* Main menu */}
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

        {/* Take the survey data and converts it to an excel spread sheet */}
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
        </div>
 
        </Container>
        
    )
}


export default Homepage;