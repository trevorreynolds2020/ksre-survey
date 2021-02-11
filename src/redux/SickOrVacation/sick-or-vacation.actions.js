import UPDATESICKORVACATION from './sick-or-vacation.types'

export const updateSickOrVacation = (sickOrVacation) => {
    return {
        type: UPDATESICKORVACATION,
        payload: sickOrVacation
    }
}