import UPDATEETHNICITY from './ethnicity.types'


const INITIAL_STATE = {
    ethnicity: "",
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEETHNICITY:
            return{
                ...state, 
                ethnicity: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;