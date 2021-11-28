import React from "react";
import ReactDOM from "react-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css";
import App from "./App";
import AuthContextProvider from "./contexts/AuthContext";
import UserContextProvider from "./contexts/UserContext";
import MemorialContextProvider from "./contexts/MemorialContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MemorialContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </MemorialContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
