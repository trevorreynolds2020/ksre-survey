import UPDATEREPORTDATA from './report-data.types'


const INITIAL_STATE = {
    reportData:[
        {
            columns: ["Date", "Counties", "Hours Worked","Sick or Vacation","Leave Hours","Personal Miles","Inoffice or Remote","Comment"],
            data: []
        }
    ]
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEREPORTDATA:
            return{
                ...state, 
                reportData: action.payload,
            }
            
        default: return state;

    }
};

export default reducer;