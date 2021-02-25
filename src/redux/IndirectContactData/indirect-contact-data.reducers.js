import UPDATEINDIRECTCONTACTDATA from './indirect-contact-data.types'


const INITIAL_STATE = {
    indirectContactData:[
        {
            columns: ["Date", "Contact", "Topic","Grand Challenges","Comment"],
            data: []
        }
    ]
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEINDIRECTCONTACTDATA:
            return{
                ...state, 
                indirectContactData: action.payload,
            }
            
        default: return state;

    }
};

export default reducer;