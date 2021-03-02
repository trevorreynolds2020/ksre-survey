import UPDATEOTHERTOTAL from './other.types'


const INITIAL_STATE = {
    otherTotal: "",
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEOTHERTOTAL:
            return{
                ...state, 
                otherTotal: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;