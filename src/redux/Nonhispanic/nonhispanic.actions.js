import UPDATENONHISPANICTOTAL from './nonhispanic.types'

export const updateNonhispanicTotal = (nonhispanicTotal) => {
    return {
        type: UPDATENONHISPANICTOTAL,
        payload: nonhispanicTotal
    }
}