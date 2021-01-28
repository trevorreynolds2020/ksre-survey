import UPDATECHALLENGES from './challenges.types'


const INITIAL_STATE = {
    challenges: "",
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATECHALLENGES:
            return{
                ...state, 
                challenges: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;