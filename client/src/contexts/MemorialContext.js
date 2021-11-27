import { createContext, useReducer } from 'react'
import {
    apiUrl,
    ADD_MEMORIAL,
    GET_MEMORIAL
} from './constants'
import { memorialReducer } from '../reducers/memorialReducer'
import axios from 'axios'
import toastSweet from '../utils/toastSweet'


export const MemorialContext = createContext()
const MemorialContextProvider = ({ children }) => {
    // State
	const [memorialState, dispatch] = useReducer(memorialReducer, {		
        memorials: [],
        // memorialsLoading: true,
        memorial: null
	})

    // Actions
    const addMemorial = async (values) => {
        try {
            const res = await axios.post(`${apiUrl}/memorials`, values)
            dispatch({
                type: ADD_MEMORIAL,
                payload: res.data
            })
            toastSweet('success', 'Memorial added successfully')
        } catch (error) {
            console.log(error)
            toastSweet('error', 'Error adding memorial')
        }
    }

    const getMemorials = async () => {
        const res = await axios.get(`${apiUrl}/memorials`)
        dispatch({
            type: GET_MEMORIAL,
            payload: res.data
        })
    }

    return (
        <MemorialContext.Provider value={{
            memorialState,
            addMemorial,
            getMemorials
        }}>
            {children}
        </MemorialContext.Provider>
    )
}

export default MemorialContextProvider