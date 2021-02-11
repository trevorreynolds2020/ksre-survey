import UPDATETOPIC from './topic.types'

export const updateTopic = (topic) => {
    return {
        type: UPDATETOPIC,
        payload: topic
    }
}