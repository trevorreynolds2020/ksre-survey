import UPDATEDIRECTCONTACTDATA from './direct-contact-data.types'


const INITIAL_STATE = {
    directContactData:[
        {
            columns: ["Date", "Name", "Phone Number" , "Email" , "Counties","Grand Challenges","Gender","Race","Ethnicity","Comments"],
            data: []
        }
    ]
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEDIRECTCONTACTDATA:
            return{
                ...state, 
                directContactData: action.payload,
            }
            
        default: return state;

    }
};

export default reducer;