import React, {useState } from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { Button, FormControl, FormGroup } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Dropdown from 'react-dropdown'; //https://openbase.io/js/react-dropdown
import 'react-dropdown/style.css';
//import { DropDownList } from '@progress/kendo-react-dropdowns';
import './DirectContactFormat.css';



export const Homepage = () => {

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
        
        
        
        <br/>
        
        
        </Container>
    );
}

export default Homepage;