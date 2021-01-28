import UPDATERACE from './race.types'


const INITIAL_STATE = {
    race: "",
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATERACE:
            return{
                ...state, 
                race: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;