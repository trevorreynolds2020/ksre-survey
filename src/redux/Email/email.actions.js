import UPDATEEMAIL from './email.types'

export const updateEmail = (email) => {
    return {
        type: UPDATEEMAIL,
        payload: email
    }
}