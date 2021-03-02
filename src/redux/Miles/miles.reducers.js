import UPDATEMILES from './miles.types'


const INITIAL_STATE = {
    miles: "",
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEMILES:
            return{
                ...state, 
                miles: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;