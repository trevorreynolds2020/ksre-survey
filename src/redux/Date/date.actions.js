import UPDATEDATE from './date.types'

export const updateDate = (date) => {
    return {
        type: UPDATEDATE,
        payload: date
    }
}