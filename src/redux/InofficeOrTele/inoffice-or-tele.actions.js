import UPDATEINOFFICEORTELE from './inoffice-or-tele.types'

export const updateInofficeOrTele = (inofficeOrTele) => {
    return {
        type: UPDATEINOFFICEORTELE,
        payload: inofficeOrTele
    }
}