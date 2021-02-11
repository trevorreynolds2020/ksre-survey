import UPDATESICKORVACATION from './sick-or-vacation.types'


const INITIAL_STATE = {
    sickOrVacation: null,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATESICKORVACATION:
            return{
                ...state, 
                sickOrVacation: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;