import { createContext, useReducer } from "react";
import {
  apiUrl,
  ADD_MEMORIAL,
  GET_MEMORIALS,
  GET_MEMORIAl,
  DELETE_MEMORIALS
} from "./constants";
import { memorialReducer, commentReducer } from "../reducers/memorialReducer";
import axios from "axios";
import toastSweet from "../utils/toastSweet";

export const MemorialContext = createContext();
const MemorialContextProvider = ({ children }) => {
  // State
  const [memorialState, dispatch] = useReducer(memorialReducer, {
    memorials: [],
    // memorialsLoading: true,
    memorial: null,
  });

  // Actions
  const addMemorial = async (values) => {
    try {
      const res = await axios.post(`${apiUrl}/memorials`, values);
      dispatch({
        type: ADD_MEMORIAL,
        payload: res.data,
      });
      toastSweet("success", "Memorial added successfully");
    } catch (error) {
      console.log(error);
      toastSweet("error", "Error adding memorial");
    }
  };

  const getMemorials = async () => {
    const res = await axios.get(`${apiUrl}/memorials`);
    dispatch({
      type: GET_MEMORIALS,
      payload: res.data,
    });
  };

  const getMemorial = async (id) => {
    const res = await axios.get(`${apiUrl}/memorials/${id}`);
    dispatch({
      type: GET_MEMORIAl,
      payload: res.data,
    });
  };

  const getMemorialsByUser = async ({ userId }) => {
    
    const res = await axios.get(`${apiUrl}/users/${userId}/memorials`);
    dispatch({
      type: GET_MEMORIALS,
      payload: res.data,
    });
  };

  const deleteMemorials = async (ids) => { 
    try {
      const res = await axios.delete(`${apiUrl}/memorials`, {
        data: { ids }
      });
      dispatch({
        type: DELETE_MEMORIALS,
        payload: ids,
      });
      toastSweet("success", "Memorials deleted successfully");
    } catch (err) {
      toastSweet("error", err.response.data.message ||  err.message || 'Something is wrong')
    }
  };

  return (
    <MemorialContext.Provider
      value={{
        memorialState,
        addMemorial,
        getMemorials,
        getMemorial,
        getMemorialsByUser,
        deleteMemorials
 
      }}
    >
      {children}
    </MemorialContext.Provider>
  );
};

export default MemorialContextProvider;
