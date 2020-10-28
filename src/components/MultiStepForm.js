import React from "react";
import {useForm, useStep} from "react-hooks-helper";
import { Report } from "./stepForm/Report";
import { DirectSummary } from "./stepForm/DirectSummary";

const requiredInformation = {
    date: "",
    countiesVisited: "",
    hoursWorked: "",
    vacationOrSick: "",
    leaveHours: "",
    personalMilesDriven: "",
    inofficeOrTelecommunication: "",
    comments: "",
};

const steps = [
    {id: "report"},
    {id: "DirectSummary"},
];

export const MultiStepForm = () =>{

    const[formData, setForm] = useForm(requiredInformation);
    const {step, navigation} = useStep({
        steps,
        initialStep: 0,
    });
    const props = {formData, setForm, navigation}
    switch(step.id){
        case "report":
            return <Report { ...props}/>;
        case "DirectSummary":
            return <DirectSummary { ...props}/>;
    }

    return(
        <div>
            <h1> Multi Step Form </h1>
        </div>
    );
};