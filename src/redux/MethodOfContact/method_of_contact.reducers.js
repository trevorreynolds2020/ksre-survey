import UPDATEMETHODOFCONTACT from './method_of_contact.types'


const INITIAL_STATE = {
    methodOfContact: "",
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEMETHODOFCONTACT:
            return{
                ...state, 
                methodOfContact: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;