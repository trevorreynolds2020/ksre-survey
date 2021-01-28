import UPDATECHALLENGES from './challenges.types'

export const updateChallenges = (challenges) => {
    return {
        type: UPDATECHALLENGES,
        payload: challenges
    }
}