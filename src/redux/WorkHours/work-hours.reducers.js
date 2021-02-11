import UPDATEWORKHOURS from './work-hours.types'


const INITIAL_STATE = {
    workHours: null,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEWORKHOURS:
            return{
                ...state, 
                workHours: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;