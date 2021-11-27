import {
    ADD_MEMORIAL,
    GET_MEMORIALS,
    GET_COMMENTS,
    ADD_COMMENT,
    DELETE_COMMENT,
    UPDATE_COMMENT

} from '../contexts/constants'

export const memorialReducer = (state, action) => {
    switch (action.type) {
        case ADD_MEMORIAL:
            return {
                ...state,
                memorials: [
                    ...state.memorials,
                    action.payload
                ]
            }
        case GET_MEMORIALS:
            return {
                ...state,
                memorials: action.payload
            }
        default:
            return state
    }
}

export const commentReducer = (state, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                comments: [
                    ...state.comments,
                    action.payload
                ]
            }
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment._id !== action.payload)
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if (comment._id === action.payload._id) {
                        return action.payload
                    } else {
                        return comment
                    }
                })
            }
        default:
            return state
    }
}