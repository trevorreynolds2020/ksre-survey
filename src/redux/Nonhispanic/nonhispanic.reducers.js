import UPDATENONHISPANICTOTAL from './nonhispanic.types'


const INITIAL_STATE = {
    nonhispanicTotal: "",
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATENONHISPANICTOTAL:
            return{
                ...state, 
                nonhispanicTotal: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;