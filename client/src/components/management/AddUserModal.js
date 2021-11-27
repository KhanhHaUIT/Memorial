import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const AddUserModal = () => {
  // Contexts
  const { showAddUserModal, setShowAddUserModal, addUser } =
    useContext(UserContext);

  // State
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    role: "user",
  });

  const { username, password, role } = newUser;

  const onChangeNewUserForm = (event) =>
    setNewUser({ ...newUser, [event.target.name]: event.target.value });

  const closeDialog = () => {
    resetAddUserData();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addUser(newUser);
    resetAddUserData();
  };

  const resetAddUserData = () => {
    setNewUser({ username: "", password: "", role: "user" });
    setShowAddUserModal(false);
  };

  return (
    <Modal show={showAddUserModal} onHide={closeDialog}>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="username"
              name="username"
              required
              aria-describedby="username-help"
              value={username}
              onChange={onChangeNewUserForm}
            />
            <Form.Text id="username-help" muted>
              Required
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              rows={3}
              placeholder="password"
              name="password"
              value={password}
              onChange={onChangeNewUserForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="role"
              name="role"
              value={role}
              onChange={onChangeNewUserForm}
            />
          </Form.Group>
         
              
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Add User
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddUserModal;
