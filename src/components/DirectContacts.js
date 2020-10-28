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
//import Dropdown from 'react-dropdown'; //https://openbase.io/js/react-dropdown
//import { DropDownList } from '@progress/kendo-react-dropdowns';


export const DirectContacts = () =>  {

    const [startDate, setSelectedDate] = useState(new Date());

    //const sizes = [ "X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large" ];

    return (
      <Container>
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

            {/* Name */}
            <TextField
                label = "Name: "
                name = "name"
                margin = "normal"
                variant = "outlined"
                fullWidth
            />

            {/* Counties */}
            <FormControl
                component="fieldset"
                fullWidth
             >
                <h1>Counties Visited: </h1>
                <FormGroup row>
                    <FormControlLabel
                    value="start"
                    control={<Checkbox color="primary" />}
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

            {/* Grand Challenges */}
            


      </Container>
    );
  }
  
  export default DirectContacts;