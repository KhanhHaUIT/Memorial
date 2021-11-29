import React from "react";
import ReactDOM from "react-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css";
import App from "./App";
import AuthContextProvider from "./contexts/AuthContext";
import UserContextProvider from "./contexts/UserContext";
import MemorialContextProvider from "./contexts/MemorialContext";
import CommentContextProvider from "./contexts/CommentContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MemorialContextProvider>
        <CommentContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </CommentContextProvider>
      </MemorialContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
