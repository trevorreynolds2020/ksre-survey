import UPDATEOTHERTOTAL from './other.types'

export const updateOtherTotal = (otherTotal) => {
    return {
        type: UPDATEOTHERTOTAL,
        payload: otherTotal
    }
}