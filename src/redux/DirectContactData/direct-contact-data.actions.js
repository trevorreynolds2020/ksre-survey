import UPDATEDIRECTCONTACTDATA from './direct-contact-data.types'

export const updateDirectContactData = (directContactData) => {
    return {
        type: UPDATEDIRECTCONTACTDATA,
        payload: directContactData
    }
}