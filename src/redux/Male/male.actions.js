import UPDATEMALETOTAL from './male.types'

export const updateMaleTotal = (maleTotal) => {
    return {
        type: UPDATEMALETOTAL,
        payload: maleTotal
    }
}