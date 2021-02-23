import UPDATEINOFFICEORREMOTE from './inoffice-or-remote.types'


const INITIAL_STATE = {
    inofficeOrRemote: "",
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEINOFFICEORREMOTE:
            return{
                ...state, 
                inofficeOrRemote: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;