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

export const IndirectContacts = () =>  {

    const [startDate, setSelectedDate] = useState(new Date());
    const methodOfContact = ["Phone","Email","Spontaneous"]
    const challenges = ["Community Vitality / VC","Developing Tomorrows Leaders","Global Health Systems","Health","Water"]


    return (
        <Container maxWidth = "xs">
        <h1>Indirect Contacts</h1>
        
        {/* Date */}
        <div className = "datePickerContainer">
            <DatePicker  
                selected = {startDate} // current date in DatePicker
                onChange = {date => setSelectedDate(date)} // when date changes update the in the DatePicker
                isClearable // X button - clears date
                withPortal // cover screen with calender
                margin = "normal"
                name = "date"
                maxWidth = "auto"
                id = "datepicker"
                className = "datePicker"
                
            />
        </div>
        <br/>

        <br/>
        <Dropdown options={methodOfContact} value={"Method of Contact"} placeholder="Select an option" />
        {/* Comments */}
        <h2>Topic:</h2>
        <div class="indirect-topic-box">
            <textarea name="" cols="" rows="5"></textarea>
        </div>

        {/* Grand Challenges */}
        <br/>
        <br/>
            <Dropdown options={challenges} value={"Grand Challenges"} placeholder="Select an option" />
        <br/>

        {/* Comments */}
        <h2>Comments:</h2>
            <div class="comments">
                <textarea name="" cols="" rows="5"></textarea>
            </div>
            
            {/* Submit */}
            <br/>
            <br/>
            <div class = "submit-button">
            <Link to = "/indirect-summary">
                <Button color = "black" variant="contained">
                            Submit
                </Button>            
            </Link>
            </div>
        </Container>
    )
}

export default IndirectContacts;