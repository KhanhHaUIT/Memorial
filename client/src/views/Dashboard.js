import { AuthContext } from "../contexts/AuthContext";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router";
import ChangePassword  from  '../components/management/ChangePasswordModal'

const Dashboard = () => {
  const history = useHistory();
  // Contexts
  const {
    authState: {
      user: { username, role },
    },
  } = useContext(AuthContext);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  return (
    <>
      <Card className="text-center mx-5 my-5">
        <Card.Header as="h1">Hi {username}</Card.Header>
        <Card.Body>
          <Card.Title>Welcome to Anything Project</Card.Title>
          <Card.Text>
            Click the button below to go to{" "}
            {role === "admin" ? "users and memorials" : "memorials"}{" "}
            managements.
          </Card.Text>
          {role === "admin" ? (
            <Button
              variant="primary"
              onClick={() => history.push("/dashboard/users")}
            >
              Manage Users
            </Button>
          ) : null}{" "}
          <Button
            variant="primary"
            onClick={() => history.push("/dashboard/memorials")}
          >
            Manage Memorials
          </Button>
          {" "}
          <Button
            variant="primary"
            onClick={() => setShowChangePasswordModal(true)}
          >
            Change Password
          </Button>
          <ChangePassword show={showChangePasswordModal} setShow={setShowChangePasswordModal}/>
        </Card.Body>
      </Card>
    </>
  );
};

export default Dashboard;
