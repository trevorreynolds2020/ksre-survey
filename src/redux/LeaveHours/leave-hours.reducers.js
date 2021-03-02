import UPDATELEAVEHOURS from './leave-hours.types'


const INITIAL_STATE = {
    leaveHours: "",
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATELEAVEHOURS:
            return{
                ...state, 
                leaveHours: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;