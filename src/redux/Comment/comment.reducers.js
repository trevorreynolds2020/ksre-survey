import UPDATECOMMENT from './comment.types'


const INITIAL_STATE = {
    comment: "",
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATECOMMENT:
            return{
                ...state, 
                comment: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;