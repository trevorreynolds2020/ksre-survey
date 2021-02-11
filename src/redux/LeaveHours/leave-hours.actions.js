import UPDATELEAVEHOURS from './leave-hours.types'

export const updateLeaveHours = (leaveHours) => {
    return {
        type: UPDATELEAVEHOURS,
        payload: leaveHours
    }
}