import React, {useState } from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, FormControl, FormGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Dropdown from 'react-dropdown'; //https://openbase.io/js/react-dropdown
import 'react-dropdown/style.css';
//import { DropDownList } from '@progress/kendo-react-dropdowns';
import './DirectContactFormat.css';

export const EventSummary = () => {
    return(
        <Container maxWidth = "xs">

            <h1>Event: </h1>
            <h2>Date: </h2>
            <h2>Name: </h2>
            <h2>County: </h2>
            <h2>Grand Challenges:</h2>
            <h2>Gender: </h2>
            <h2>Race: </h2>
            <h2>Ethnicity: </h2>
            <h2>Comments: </h2>

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
                    <Button color = "black" variant="contained">
                        Submit
                    </Button>            
                </Link>
            </div>
        </Container>


    );

}

export default EventSummary;