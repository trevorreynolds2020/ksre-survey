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
import './ReportStyle.css';

//import Check from 'carbon-components/Checkbox';


export const Report = ({formData, setForm, navigation}) => {

    const {date, 
    countiesVisited,
    hoursWorked,
    vacationOrSick,
    leaveHours,
    personalMilesDriven,
    inofficeOrTelecommunication,
    comments} = formData;
    
    const [startDate, setSelectedDate] = useState(new Date());

    return(
        <Container maxWidth = "xs">
            <h1 class = "title"> Report </h1>

           
            
            <div className = "datePickerContainer">
            <DatePicker  //datepicker
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

            {/* Hours Worked */}
            <TextField
                label = "Hours Worked: "
                name = "hoursWorked"
                value = {formData.hoursWorked}
                margin = "normal"
                variant = "outlined"
                fullWidth
            
            />

            {/* Vacation or Sick */}
            
            <FormControl component="fieldset">
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel value="sick" control={<Radio color="primary" />} label="Sick" />
                    <FormControlLabel value="vacation" control={<Radio color="primary" />} label="Vacation" />
                </RadioGroup>
            </FormControl>

            <TextField
                label = "Leave Hours: "
                name = "personalMilesDriven"
                value = {formData.personalMilesDriven}
                margin = "normal"
                variant = "outlined"
                autoComplete = "off"
                fullWidth
            />

            {/* Miles Driven */}
            <TextField
                label = "Personal Miles Driven: "
                name = "personalMilesDriven"
                value = {formData.personalMilesDriven}
                margin = "normal"
                variant = "outlined"
                autoComplete = "off"
                fullWidth
            />

            {/* Inoffice or Telecommunication */}
            <FormControl component="fieldset">
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel value="inoffice" control={<Radio color="primary" />} label="Inoffice" />
                    <FormControlLabel value="telecommunication" control={<Radio color="primary" />} label="Telecommunication" />
                </RadioGroup>
            </FormControl>

            {/* Comments */}
            <h1>Comments:</h1>
            <TextBoxComponent 
                multiline={true}
                title = "Comments:"
                id = "comments"
                className = "commentsClass"

            />
            <Button
                color = "black"
                variant="contained"
            >
                Submit
            </Button>
            
            
        </Container>

        
    )
}