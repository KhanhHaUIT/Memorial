import {
    ADD_MEMORIAL,
    GET_MEMORIALS,
    GET_MEMORIAl,
    DELETE_MEMORIALS

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
        case GET_MEMORIAl:
            return {
                ...state,
                memorial: action.payload
            }
        case GET_MEMORIALS:
            return {
                ...state,
                memorials: action.payload
            }
        case DELETE_MEMORIALS:
            return {
                ...state,
                memorials: state.memorials.filter((memorial) => !action.payload.includes(memorial._id)),
            }
        default:
            return state
    }
}
