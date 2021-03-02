import UPDATEFEMALETOTAL from './female.types'


const INITIAL_STATE = {
    femaleTotal: "",
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEFEMALETOTAL:
            return{
                ...state, 
                femaleTotal: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;