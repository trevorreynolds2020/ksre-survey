import UPDATERACE from './race.types'

export const updateRace = (race) => {
    return {
        type: UPDATERACE,
        payload: race
    }
}