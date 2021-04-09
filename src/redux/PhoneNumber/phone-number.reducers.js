import UPDATEPHONENUMBER from './phone-number.types'


const INITIAL_STATE = {
    phoneNumber: "",
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEPHONENUMBER:
            return{
                ...state, 
                phoneNumber: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;