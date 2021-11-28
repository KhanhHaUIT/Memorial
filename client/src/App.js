import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Auth from "./views/Auth";

import Dashboard from "./views/Dashboard";
import ProtectedRoute from "./components/routing/ProtectedRoute";

import UsersManagement from "./views/UsersManagement";
import MemorialsManagement from "./views/MemorialsManagements";
import DetailMemorial from "./views/DetailMemorial";


function App() {
  
  return (
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
        <ProtectedRoute
          exact
          path="/dashboard/users"
          component={UsersManagement}
        />
        <ProtectedRoute
          exact
          path="/dashboard/memorials"
          component={MemorialsManagement}
        />
        <Route exact path="/:cardId" component={DetailMemorial} />
      </Switch>
    </Router>
  );
}

export default App;
