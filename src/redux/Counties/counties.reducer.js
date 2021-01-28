import UPDATECOUNTIES from './counties.types'


const INITIAL_STATE = {
    counties: [],
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATECOUNTIES:
            return{
                ...state, 
                counties: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;