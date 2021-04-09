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
import { connect } from "react-redux";


import { updateDate } from '../redux/Date/date.actions';
import { updateMethodOfContact } from '../redux/MethodOfContact/method_of_contact.actions'
import { updateTopic } from '../redux/Topic/topic.actions'
import { updateChallenges } from '../redux/Challenges/challenges.actions'
import { updateComment } from '../redux/Comment/comment.actions'




function IndirectContacts(props){


    const [startDate, setSelectedDate] = useState(new Date());
    const MethodOfContact = ["Newspaper" , "Podcast" , "Radio", "TV", "Social Media", "Video", "E-News", "Exhibit", "Mailing", "Handout"]
    const Challenges = ["Community Vitality / VC","Developing Tomorrows Leaders","Global Health Systems","Health","Water"]

    const [ date , setDate ] = useState(null);
    const [ methodOfContact , setMethodOfContact ] = useState(null);
    const [ topic , setTopic ] = useState(null);
    const [ challenges , setChallenges ] = useState(null);
    const [ comment , setComment ] = useState(null);




    function handleDateChange(date){
        setDate(date)
        props.updateDate(date)
    }

    function handleMethodOfContact(event){
        console.log("inside")
        setMethodOfContact(event.value)
        props.updateMethodOfContact(event.value)
    }

    function handleTopicChange(){
        var topic = document.getElementById("topic-box").value
        setTopic(topic)
        props.updateTopic(topic)
    }

    function handleChallengesChange(event){
        setChallenges(event.value)
        props.updateChallenges(event.value)
    }

    
    function handleCommentChange(){
        var comment = document.getElementById("comment-box").value
        setComment(comment)
        props.updateComment(comment)
    }

    // function handleChallengesChange(event){
    //     console.log('triggered')
    //     console.log(event.value)
    //     setChallenges(event.value)
    //     props.updateChallenges(event.value)
    // }
    
    var currDate = new Date()

    return (
        <Container maxWidth = "xs">

        <div class = "center-items">       
            <h1>Indirect Contacts</h1>
        </div>

        {/* Date */}
            <label>Select Date: </label>
            <DatePicker  
                selected = {props.date.date} // current date in DatePicker
                onChange = {handleDateChange} // when date changes update the in the DatePicker
                isClearable // X button - clears date
                withPortal // cover screen with calender
                margin = "normal"
                name = "date"
                maxWidth = "auto"
                id = "datepicker"
                className = "datePicker"   
                placeholderText = {currDate.getMonth().toString()+"/"+currDate.getDay().toString()+"/"+currDate.getFullYear().toString()}

            />
        <br/>

        <br/>
        {/* Method of Contact */}
        <Dropdown onChange = {handleMethodOfContact} value = {props.methodOfContact.methodOfContact} options={MethodOfContact} placeholder="Method Of Contact" />
        {/* <Dropdown onChange = {handleChallengesChange} value = {props.challenges.challenges} options={challengesList} placeholder="Grand Challenges" /> */}

        {/* Topic */}
        <h2>Topic:</h2>
        <div class="indirect-topic-box">
            <textarea onChange = {handleTopicChange} value = {props.topic.topic} id = "topic-box" name="" cols="" rows="5"></textarea>
        </div>

        {/* Grand Challenges */}
        <br/>
        <br/>
            <Dropdown onChange = {handleChallengesChange} value = {props.challenges.challenges} options={Challenges} value={"Grand Challenges"} placeholder="Select an option" />
        <br/>

        {/* Comments */}
        <h2>Comments:</h2>
            <div class="comments">
                <textarea onChange={handleCommentChange} value = {props.comment.comment} id = "comment-box" name="comment" cols="" rows="5" placeholder="Details / Collaborators or Notes"></textarea>
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

const mapStateToProps = state => {
    return {
        date: state.date,
        methodOfContact: state.methodOfContact,
        topic: state.topic,
        challenges: state.challenges,
        comment: state.comment,
    }
}

const mapDispatchToProps = dispatch => {
return {
    updateDate: (date) => dispatch(updateDate(date)),
    updateMethodOfContact: (methodOfContact) => dispatch(updateMethodOfContact(methodOfContact)),
    updateTopic: (topic) => dispatch(updateTopic(topic)),
    updateChallenges: (challenges) => dispatch(updateChallenges(challenges)),
    updateComment: (comment) => dispatch(updateComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndirectContacts);