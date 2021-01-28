import UPDATEETHNICITY from './ethnicity.types'

export const updateEthnicity = (ethnicity) => {
    return {
        type: UPDATEETHNICITY,
        payload: ethnicity
    }
}