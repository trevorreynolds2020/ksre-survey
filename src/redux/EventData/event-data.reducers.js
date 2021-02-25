import UPDATEEVENTDATA from './event-data.types'


const INITIAL_STATE = {
    eventData:[
        {
            columns: ["Date", "Name", "Counties","Grand Challenges","Gender","Race","Ethnicity","Comments"],
            data: []
        }
    ]
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEEVENTDATA:
            return{
                ...state, 
                eventData: action.payload,
            }
            
        default: return state;

    }
};

export default reducer;