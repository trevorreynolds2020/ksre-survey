import UPDATEEVENTDATA from './event-data.types'

export const updateEventData = (eventData) => {
    return {
        type: UPDATEEVENTDATA,
        payload: eventData
    }
}