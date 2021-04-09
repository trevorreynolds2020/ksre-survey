import UPDATEEMAIL from './email.types'


const INITIAL_STATE = {
    email: "",
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEEMAIL:
            return{
                ...state, 
                email: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;