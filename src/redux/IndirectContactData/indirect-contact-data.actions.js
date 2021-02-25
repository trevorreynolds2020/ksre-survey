import UPDATEINDIRECTCONTACTDATA from './indirect-contact-data.types'

export const updateIndirectContactData = (indirectContactData) => {
    return {
        type: UPDATEINDIRECTCONTACTDATA,
        payload: indirectContactData
    }
}