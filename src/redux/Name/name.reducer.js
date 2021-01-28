import UPDATENAME from './name.types'


const INITIAL_STATE = {
    name: '',
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATENAME:
            return{
                ...state, 
                name: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;