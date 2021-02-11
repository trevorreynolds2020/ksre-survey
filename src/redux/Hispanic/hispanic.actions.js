import UPDATEHISPANICTOTAL from './hispanic.types'

export const updateHispanicTotal = (hispanicTotal) => {
    return {
        type: UPDATEHISPANICTOTAL,
        payload: hispanicTotal
    }
}