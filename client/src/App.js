import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Auth from "./views/Auth";
import AuthContextProvider from "./contexts/AuthContext";
import Dashboard from "./views/Dashboard";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import About from "./views/About";
import PostContextProvider from "./contexts/PostContext";
import MemorialContextProvider from "./contexts/MemorialContext";

function App() {
  return (
    <AuthContextProvider>
      <MemorialContextProvider>
        <PostContextProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/login"
                render={(props) => <Auth {...props} authRoute="login" />}
              />
              <Route
                exact
                path="/register"
                render={(props) => <Auth {...props} authRoute="register" />}
              />
              <ProtectedRoute exact path="/dashboard" component={Dashboard} />
              <ProtectedRoute exact path="/about" component={About} />
            </Switch>
          </Router>
        </PostContextProvider>
      </MemorialContextProvider>
    </AuthContextProvider>
  );
}

export default App;
