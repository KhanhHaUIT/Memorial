import {
  ADD_USER,
  GET_USER,
  GET_USERS,
  DELETE_USER,
  UPDATE_USER,
} from "../contexts/constants";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    default:
      return state;
  }
};
