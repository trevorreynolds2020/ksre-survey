import UPDATEMALETOTAL from './male.types'


const INITIAL_STATE = {
    maleTotal: null,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEMALETOTAL:
            return{
                ...state, 
                maleTotal: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;