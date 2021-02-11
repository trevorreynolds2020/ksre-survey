import UPDATEUNKNOWNTOTAL from './unknown.types'

export const updateUnknownTotal = (unknownTotal) => {
    return {
        type: UPDATEUNKNOWNTOTAL,
        payload: unknownTotal
    }
}