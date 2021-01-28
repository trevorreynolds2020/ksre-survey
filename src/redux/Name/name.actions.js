import UPDATENAME from './name.types'

export const updateName = (name) => {
    return {
        type: UPDATENAME,
        payload: name
    }
}