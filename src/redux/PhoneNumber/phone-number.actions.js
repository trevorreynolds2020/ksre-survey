import UPDATEPHONENUMBER from './phone-number.types'

export const updatePhoneNumber = (phoneNumber) => {
    return {
        type: UPDATEPHONENUMBER,
        payload: phoneNumber
    }
}