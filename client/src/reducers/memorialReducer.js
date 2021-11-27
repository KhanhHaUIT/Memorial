import {
    ADD_MEMORIAL,
    GET_MEMORIAL
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
        case GET_MEMORIAL:
            return {
                ...state,
                memorials: action.payload
            }
        default:
            return state
    }
}