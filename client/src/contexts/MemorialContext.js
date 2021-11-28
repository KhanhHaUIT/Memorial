import { createContext, useReducer } from "react";
import {
  apiUrl,
  ADD_MEMORIAL,
  GET_MEMORIALS,
  GET_MEMORIAl,
  GET_COMMENTS,
  UPDATE_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
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

  const [commentState, commentDispatch] = useReducer(commentReducer, {
    comments: [],
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

  const getComments = async ({ memorialId }) => {
    const res = await axios.get(`${apiUrl}/memorials/${memorialId}/comments`);
    commentDispatch({
      type: GET_COMMENTS,
      payload: res.data,
    });
  };

  const updateComment = async ({ memorialId, commentId, values }) => {
    try {
      const res = await axios.put(
        `${apiUrl}/memorials/${memorialId}/comments/${commentId}`,
        values
      );
      commentDispatch({
        type: UPDATE_COMMENT,
        payload: res.data,
      });
      toastSweet("success", "Comment updated successfully");
    } catch (error) {
      console.log(error);
      toastSweet("error", "Error updating comment");
    }
  };

  const addComment = async (values) => {
    try {
      const res = await axios.post(
        `${apiUrl}/memorials/${values.memorialId}/comments`,
        { message: values.message }
      );
      commentDispatch({
        type: ADD_COMMENT,
        payload: res.data,
      });
      toastSweet("success", "Comment added successfully");
    } catch (error) {
      console.log(error);
      toastSweet("error", "Error adding comment");
    }
  };

  const deleteComment = async ({ memorialId, commentId }) => {
    try {
      const res = await axios.delete(
        `${apiUrl}/memorials/${memorialId}/comments/${commentId}`
      );
      commentDispatch({
        type: DELETE_COMMENT,
        payload: res.data,
      });
      toastSweet("success", "Comment deleted successfully");
    } catch (error) {
      console.log(error);
      toastSweet("error", "Error deleting comment");
    }
  };

  const getMemorialsByUser = async ({ userId }) => {
    const res = await axios.get(`${apiUrl}/users/${userId}/memorials`);
    dispatch({
      type: GET_MEMORIALS,
      payload: res.data,
    });
  };

  return (
    <MemorialContext.Provider
      value={{
        memorialState,
        commentState,
        addMemorial,
        getMemorials,
        getMemorial,
        getComments,
        updateComment,
        addComment,
        getMemorialsByUser,
        deleteComment,
      }}
    >
      {children}
    </MemorialContext.Provider>
  );
};

export default MemorialContextProvider;
