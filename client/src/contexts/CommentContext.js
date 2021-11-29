import { createContext, useReducer } from "react";
import {
  apiUrl,
  GET_COMMENTS,
  UPDATE_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
} from "./constants";
import { commentReducer } from "../reducers/commentReducer";
import axios from "axios";
import toastSweet from "../utils/toastSweet";

export const CommentContext = createContext();
const CommentContextProvider = ({ children }) => {
 
  const [commentState, commentDispatch] = useReducer(commentReducer, {
    comments: [],
  });

  // Actions
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


  return (
    <CommentContext.Provider
      value={{
        commentState,
        getComments,
        updateComment,
        addComment,
        deleteComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;
