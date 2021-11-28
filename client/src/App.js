import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Auth from "./views/Auth";
import AuthContextProvider from "./contexts/AuthContext";
import Dashboard from "./views/Dashboard";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import About from "./views/About";
import PostContextProvider from "./contexts/PostContext";
import UserContextProvider from "./contexts/UserContext";
import MemorialContextProvider from "./contexts/MemorialContext";
import UsersManagement from "./views/UsersManagement";
import MemorialsManagement from "./views/MemorialsManagements";
import DetailMemorial from './views/DetailMemorial'

function App() {
  return (
    <AuthContextProvider>
      <MemorialContextProvider>
        <PostContextProvider>
          <UserContextProvider>
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
                <ProtectedRoute exact path="/dashboard/users" component={UsersManagement} />
                <ProtectedRoute exact path="/dashboard/memorials" component={MemorialsManagement} />
                <Route exact path="/:cardId" component={DetailMemorial} />
              </Switch>
            </Router>
          </UserContextProvider>
        </PostContextProvider>
      </MemorialContextProvider>
    </AuthContextProvider>
  );
}

export default App;
