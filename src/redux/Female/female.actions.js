import UPDATEFEMALETOTAL from './female.types'

export const updateFemaleTotal = (femaleTotal) => {
    return {
        type: UPDATEFEMALETOTAL,
        payload: femaleTotal
    }
}