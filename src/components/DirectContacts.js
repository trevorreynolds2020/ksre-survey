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


export const DirectContacts = () =>  {

    const [startDate, setSelectedDate] = useState(new Date());

    const challenges = ["Community Vitality / VC","Developing Tomorrows Leaders","Global Health Systems","Health","Water"]
    const gender = [ "Male", "Female", "other"];
    const race = ["American Indian or Alaska Native","Asian","Black or African American","Native Hawaiian or Other Pacific Islander","White"]
    const ethnicity = ["Hispanic or Latino or Spanish Origin","Not Hispanic or Latino or Spanish Origin"]

    return (
      <Container>
          <h1>Direct Contacts</h1>
          <br/>
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

            {/* Name */}
            <br/>
            <TextField
                label = "Name: "
                name = "name"
                margin = "normal"
                variant = "outlined"
                fullWidth
            />

            {/* Counties */}
            <br/>
            <br/>
            <label class = "counties-visited">Counties Visited:</label>
            <div class = "counties-visited">
            <FormControl
                component="fieldset"
                
             >
                <FormGroup row >
                    <FormControlLabel
                    value="start"
                    control={<Checkbox />}
                    label="RL"
                    labelPlacement="start"
                    width= "20%"
                    />
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

            {/* Grand Challenges, Gender, Race, Ethnicity */}
            <br/>
            <Dropdown options={challenges} value={"Grand Challenges"} placeholder="Select an option" />
            <br/>
            <Dropdown options={gender} value={"Gender"} placeholder="Select an option" />
            <br/>
            <Dropdown options={race} value={"Race"} placeholder="Select an option" />
            <br/>
            <Dropdown options={ethnicity} value={"Ethnicity"} placeholder="Select an option" />

            {/* Comments */}
            <h2>Comments:</h2>
            <div class="comments">
                <textarea name="" cols="" rows="5"></textarea>
            </div>
            
            {/* Submit */}
            <br/>
            <br/>
            <div class = "submit-button">
            <Link to = "/direct-summary">
                <Button color = "black" variant="contained">
                            Submit
                </Button>            
            </Link>
            </div>
        
                
          

      </Container>
    );
  }
  
  export default DirectContacts;