import UPDATEHISPANICTOTAL from './hispanic.types'


const INITIAL_STATE = {
    hispanicTotal: null,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEHISPANICTOTAL:
            return{
                ...state, 
                hispanicTotal: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;