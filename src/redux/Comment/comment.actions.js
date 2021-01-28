import UPDATECOMMENT from './comment.types'

export const updateComment = (comment) => {
    return {
        type: UPDATECOMMENT,
        payload: comment
    }
}