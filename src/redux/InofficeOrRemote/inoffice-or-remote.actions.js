import UPDATEINOFFICEORREMOTE from './inoffice-or-remote.types'

export const updateInofficeOrRemote = (inofficeOrRemote) => {
    return {
        type: UPDATEINOFFICEORREMOTE,
        payload: inofficeOrRemote
    }
}