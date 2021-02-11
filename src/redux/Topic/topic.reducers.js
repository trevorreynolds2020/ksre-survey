import UPDATETOPIC from './topic.types'


const INITIAL_STATE = {
    topic: "",
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATETOPIC:
            return{
                ...state, 
                topic: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;