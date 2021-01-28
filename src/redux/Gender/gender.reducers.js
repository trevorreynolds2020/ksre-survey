import UPDATEGENDER from './gender.types'


const INITIAL_STATE = {
    gender: "",
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEGENDER:
            return{
                ...state, 
                gender: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;