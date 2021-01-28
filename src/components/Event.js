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
import {useStateValue} from './StateProvider';

function Event() {

    const [startDate, setSelectedDate] = useState(new Date());
    const challenges = ["Community Vitality / VC","Developing Tomorrows Leaders","Global Health Systems","Health","Water"]
    const [{male},dispatch] = useStateValue();
    //const gender_male = null;
    

    // handleChange(event){
    //     const name = event.target.name;
    //     const value = event.target.type === "checkbox" ? event.target.checked: event.target.value;
    //     this.setState({[name]:value});
    // }

    // function handleChange(){
    //     dispatch({ type: 'SET_MALE', male: "sample" });
    //     console.log(male);
    // }

    function handleChange(event){
        const value = event.target.male.value;
        //const value = event.target.type === "checkbox" ? event.target.checked: event.target.value
        dispatch({ type: 'SET_MALE', male: "sample" });
        console.log(value);
        console.log(male);
    }

    return(
        <Container maxWidth = "xs">

        <h1>Event</h1>
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
        
        {/* Counties */}
            <br/>
            <label class = "counties-visited">Counties Visited:</label>
            <div class = "counties-visited">
            <FormControl
                component="fieldset"
            >
                 {/*RL take out*/}
                <FormGroup row >
                    
                    <FormControlLabel
                    value="start"
                    control={<Checkbox color="primary" />}
                    label="CR"
                    labelPlacement="start"
                    width= "20%"
                    />
                    <FormControlLabel
                    value="start"
                    control={<Checkbox color="primary" />}
                    label="LB"
                    labelPlacement="start"
                    width= "20%"
                    />
                    <FormControlLabel
                    value="start"
                    control={<Checkbox color="primary" />}
                    label="MG"
                    labelPlacement="start"
                    width= "20%"
                    />
                    <FormControlLabel
                    value="start"
                    control={<Checkbox color="primary" />}
                    label="WL"
                    labelPlacement="start"
                    width= "20%"
                    />
                </FormGroup>
            </FormControl>
            </div>

        {/* People information */}
            <TextField
                label = "Male: "
                name = "male"
                margin = "normal"
                variant = "outlined"
                fullWidth
                value = {male}
                onChange = {this.handleChange}
            />
        <br/>
            <TextField
                label = "Female: "
                name = "female"
                margin = "normal"
                variant = "outlined"
                fullWidth
            />
        <br/>
            <TextField
                label = "Other: "
                name = "other"
                margin = "normal"
                variant = "outlined"
                fullWidth
            />
        <br/>
            <TextField
                label = "Non-Hispanic: "
                name = "female"
                margin = "normal"
                variant = "outlined"
                fullWidth
            />
        <br/>
            <TextField
                label = "Hispanic: "
                name = "female"
                margin = "normal"
                variant = "outlined"
                fullWidth
            />
       
        <br/>
            <TextField
                label = "Unknown: "
                name = "female"
                margin = "normal"
                variant = "outlined"
                fullWidth
            />

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
            <Link to = "/event-summary">
                <Button onClick = {()=> handleChange} color = "black" variant="contained">
                    Submit
                </Button>            
            </Link>
            </div>
        </Container>
    );
}

export default Event;