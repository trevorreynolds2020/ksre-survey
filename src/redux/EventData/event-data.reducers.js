import UPDATEEVENTDATA from './event-data.types'


const INITIAL_STATE = {
    eventData:[
        {
            columns: ["Date","Counties", "Male", "Female","Other","Hispanic","Non-Hispanic","Unknown","Challenge","Comment"],
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