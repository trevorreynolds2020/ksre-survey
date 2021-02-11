import UPDATEUNKNOWNTOTAL from './unknown.types'


const INITIAL_STATE = {
    unknownTotal: null,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEUNKNOWNTOTAL:
            return{
                ...state, 
                unknownTotal: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;