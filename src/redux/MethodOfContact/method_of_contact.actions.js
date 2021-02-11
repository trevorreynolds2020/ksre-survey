import UPDATEMETHODOFCONTACT from './method_of_contact.types'

export const updateMethodOfContact = (methodOfContact) => {
    return {
        type: UPDATEMETHODOFCONTACT,
        payload: methodOfContact
    }
}