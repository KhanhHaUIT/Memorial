import { createContext, useReducer, useState } from 'react'
import {userReducer} from '../reducers/userReducer'
import {
    apiUrl,
    ADD_USER,
    DELETE_USER,
    UPDATE_USER,
    GET_USER,
    GET_USERS
} from './constants'

import axios from 'axios'
import toastSweet from '../utils/toastSweet'
export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
	// State
	const [userState, dispatch] = useReducer(userReducer, {
		users: [],
        user: null
	})
    const [showAddUserModal, setShowAddUserModal] = useState(false)
	// Actions
    const getUsers = async () => {
        try {
            const res = await axios.get(apiUrl + '/users')
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }
    const updateUser = async (user) => {
        try {
            const res = await axios.put(apiUrl + '/users/' + user.id, user)
            dispatch({
                type: UPDATE_USER,
                payload: res.data
            })
            toastSweet('success', 'User updated successfully')
        } catch (err) {
            console.log(err)
            toastSweet('error', err.message || 'Something is wrong')
        }
    }
    const addUser = async (user) => {
        try {
            const res = await axios.post(apiUrl + '/users', user)
            dispatch({
                type: ADD_USER,
                payload: res.data
            })
            toastSweet('success', 'User added successfully')
        } catch (err) {
            console.log(err)
            toastSweet('error', err.message || 'Something is wrong')
        }
    }

    const deleteUser = async (id) => {
        try {
            const res = await axios.delete(apiUrl + '/users/' + id)
            dispatch({
                type: DELETE_USER,
                payload: id
            })
            toastSweet('success', 'User deleted successfully')
        } catch (err) {
            console.log(err)
            toastSweet('error', err.message || 'User deleted successfully')
        }
    }


	return (
		<UserContext.Provider value={{
            userState,
            getUsers,
            updateUser,
            addUser,
            deleteUser,
            showAddUserModal,
            setShowAddUserModal
        }}>
			{children}
		</UserContext.Provider>
	)
}

export default UserContextProvider
