import UPDATEMILES from './miles.types'

export const updateMiles = (miles) => {
    return {
        type: UPDATEMILES,
        payload: miles
    }
}