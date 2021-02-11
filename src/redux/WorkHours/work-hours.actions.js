import UPDATEWORKHOURS from './work-hours.types'

export const updateWorkHours = (workHours) => {
    return {
        type: UPDATEWORKHOURS,
        payload: workHours
    }
}