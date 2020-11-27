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
import {useHistory} from 'react-router-dom';
import { useDispatch, dispatch } from 'react-redux';
import {submitComment, submitCounty} from '../rootSlice';
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {configureStore} from "react-redux";
import directContacts from "../reducers/directContacts";
import {connect} from "react-redux";
import {addDirectContact} from '../actions/addDirectContact';



class DirectContacts extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            date: props.date || Date.now(),
            name: props.name || "",
            counties: [],
            challenges: "",
            gender: "",
            race: "",
            ethnicity: "",
            comment: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handeCountiesSelect = this.handeCountiesSelect.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const name = event.target.name;
        const value = event.target.type === "checkbox" ? event.target.checked: event.target.value
        this.setState({[name]:value})
        
    }
    handleDateChange(date){
        this.setState({date:date})
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.directContacts(this.state);
        console.log("Here");
    }
    handeCountiesSelect(event){
        var counties = this.state.counties;
        if(event.target.checked){
            counties.push(event.target.value);
        }
        else{
            const index = counties.indexOf(event.target.value);
            counties.splice(index,1);
        }
        this.setState({counties:counties});
    }
    render(){
//    const [startDate, setSelectedDate] = useState(new Date());
   // const dispatch = useDispatch();
    //const history = useHistory(); 
    //const comment = useSelector((state) => state.comment);
   // const { register, handleSubmit } = useForm({ defaultValues: { comment } });

 


    const challenges = ["Community Vitality / VC","Developing Tomorrows Leaders","Global Health Systems","Health","Water"];
    const gender = [ "Male", "Female", "other"];
    const race = ["American Indian or Alaska Native","Asian","Black or African American","Native Hawaiian or Other Pacific Islander","White"]
    const ethnicity = ["Hispanic or Latino or Spanish Origin","Not Hispanic or Latino or Spanish Origin"]

   // const state = useSelector((state) => state);


    return (

        
      <Container>
        <form onSubmit = {this.handleSubmit}>

          <pre>{JSON.stringify(this.state, null, 2)}</pre>
          <br/>
          <div className = "datePickerContainer">
            <DatePicker  
                selected = {this.state.date} // current date in DatePicker
                onChange = {this.handleDateChange} // when date changes update the in the DatePicker
                isClearable // X button - clears date
                withPortal // cover screen with calender
                margin = "normal"
                name = "date"
                maxWidth = "auto"
                id = "datepicker"
                className = "datePicker"
                
            />

            
            {/* redux for database stuff*/}
            </div>

            {/* Name */}
            <br/>
            <TextField
                label = "Name: "
                name = "name"
                margin = "normal"
                variant = "outlined"
                fullWidth
                value = {this.state.name}
                onChange = {this.handleChange}
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
                    control={<Checkbox color="primary" />}
                    label="CR"
                    labelPlacement="start"
                    width= "20%"
                    value = "CR"
                    checked = {this.state.counties.includes("CR")}
                    onChange = {this.handeCountiesSelect}
                    />
                    <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="LB"
                    labelPlacement="start"
                    width= "20%"
                    value = "LB"
                    checked = {this.state.counties.includes("LB")}
                    onChange = {this.handeCountiesSelect}
                    />
                    <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="MG"
                    labelPlacement="start"
                    width= "20%"
                    value = "MG"
                    checked = {this.state.counties.includes("MG")}
                    onChange = {this.handeCountiesSelect}
                    />
                    <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="WL"
                    labelPlacement="start"
                    width= "20%"
                    value = "WL"
                    checked = {this.state.counties.includes("WL")}
                    onChange = {this.handeCountiesSelect}
                    />
                </FormGroup>
            </FormControl>
            </div>

            {/* Grand Challenges, Gender, Race, Ethnicity*/}
            <br/>
            <Dropdown options={challenges} name="challenges" placeholder="Grand Challenges" />
            <br/>
            <Dropdown options={gender} value={"Gender"} name = "comment" placeholder="Select an option" />
            <br/>
            <Dropdown options={race} value={"Race"} placeholder="Select an option" />
            <br/>
            <Dropdown options={ethnicity} value={"Ethnicity"} placeholder="Select an option" />

            {/* Comments */}
            <h2>Comments:</h2>
            <div class="comments">
                <textarea name="comment" cols="" rows="5"></textarea>
            </div>
            
            {/* Submit */}
            <br/>
            <br/>
            <div class = "submit-button" >
            <input onClick = {()=> this.props.dispatch(addDirectContact)}value = "Submit" type = "submit"></input> 
            
            </div>
        
                
          
            </form>  
      </Container>
    );
    }
  }
  
  const mapStateToProps = (state,ownProps) => ({
    name: "ffff"
  })
  const mapDispatchToProps = {directContacts}
  export default connect(mapStateToProps,mapDispatchToProps)(DirectContacts);