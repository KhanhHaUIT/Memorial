export const apiUrl =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:4000/api'
		: 'https://sleepy-inlet-56101.herokuapp.com/api'

export const LOCAL_STORAGE_TOKEN_NAME = 'token'

export const POSTS_LOADED_SUCCESS = 'POSTS_LOADED_SUCCESS'
export const POSTS_LOADED_FAIL = 'POSTS_LOADED_FAIL'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const FIND_POST = 'FIND_POST'


export const ADD_MEMORIAL = 'ADD_MEMORAIL'
export const GET_MEMORIALS = 'GET_MEMORAILS'

export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

export const ADD_USER = 'ADD_USER'
export const GET_USER = 'GET_USER'
export const GET_USERS = 'GET_USERS'
export const DELETE_USER = 'DELETE_USER'
export const UPDATE_USER = 'UPDATE_USER'