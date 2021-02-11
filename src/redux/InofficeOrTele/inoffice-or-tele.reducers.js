import UPDATEINOFFICEORTELE from './inoffice-or-tele.types'


const INITIAL_STATE = {
    inofficeOrTele: "",
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEINOFFICEORTELE:
            return{
                ...state, 
                inofficeOrTele: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;