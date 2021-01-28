import UPDATEGENDER from './gender.types'

export const updateGender = (gender) => {
    return {
        type: UPDATEGENDER,
        payload: gender
    }
}