import UPDATEDATE from './date.types'


const INITIAL_STATE = {
    date: '',
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEDATE:
            return{
                ...state, 
                date: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;