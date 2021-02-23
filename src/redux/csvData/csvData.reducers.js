import UPDATECSVDATA from './csvData.types'


const INITIAL_STATE = {
    // csvData: [["Type", "Date", "Name","Contact","Gender","Race","Ethnicity","Counties", "Challenges","Topic","Males","Females","Other","Hispanic","Non-Hispanic","Unknown","Hours Worked","Sick or Vacation","Leave Hours","Miles Driven","Remote","Comments"]],
    csvData:[
        {
          columns: [
            { value: "Name", widthPx: 50 }, // width in pixels
            { value: "Salary", widthCh: 20 }, // width in charachters
            { value: "Sex", widthPx: 60, widthCh: 20 }, // will check for width in pixels first
          ],
          data: [
            ["Johnson", 30000, "Male"],
            ["Monika", 355000, "Female"],
            ["Konstantina", 20000, "Female"],
            ["John", 250000, "Male"],
            ["Josef", 450500, "Male"],
          ],
        },
        {
          xSteps: 1, // Will start putting cell with 1 empty cell on left most
          ySteps: 5, //will put space of 5 rows,
          columns: ["Name", "Department"],
          data: [
            ["Johnson", "Finance"],
            ["Monika", "IT"],
            ["Konstantina", "IT Billing"],
            ["John", "HR"],
            ["Josef", "Testing"],
          ],
        },
      ]
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATECSVDATA:
            return{
                ...state, 
                csvData: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;