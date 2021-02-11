import React, {useState } from 'react'
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'react-dropdown/style.css';
//import { DropDownList } from '@progress/kendo-react-dropdowns';
import './DirectContactFormat.css';

import { CSVLink, CSVDownload } from "react-csv";



export const Homepage = () => {

    // Make redux variable
    // On submit page pull in everything as an array in order
    // Append that array to csvData
    
    const csvData = [
        ["type", "date", "name","counties", "challenges","gender","race","ethnicity","method of contact","topic","males","females","other","hispanic","non-hispanic","unknown","hours worked","sick or vacation","leave hours","miles driven","inoffice or tele","comments"],
        // ["direct", "null", "ah@smthing.co.com"],
        // ["indirect", "something", "rl@smthing.co.com"],
        // ["event", "Min l3b", "ymin@cocococo.com"]
      ];

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

            <CSVLink data={csvData}>Download me</CSVLink>;
        
        
        <br/>
        
        
        </Container>
    );
}

export default Homepage;